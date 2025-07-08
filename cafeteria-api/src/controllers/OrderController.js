'use strict';

const db = require('../database/models');
const { identificarSabor } = require('../services/flavorIdentifierService');

module.exports = {
  async create(req, res) {
    try {
      const { baseIngredients, extras } = req.body;

      if (!baseIngredients || baseIngredients.length < 1) {
        return res.status(400).json({ error: 'Selecione pelo menos 1 ingrediente base.' });
      }

      if (extras && extras.length > 2) {
        return res.status(400).json({ error: 'Máximo de 2 ingredientes extras permitidos.' });
      }

      // 🧠 Validação de existência de ingredientes base
      const ingredientesBase = await db.BaseIngredient.findAll({
        where: { id: baseIngredients },
        attributes: ['id']
      });

      const idsEncontrados = ingredientesBase.map(i => i.id);
      const idsNaoEncontrados = baseIngredients.filter(id => !idsEncontrados.includes(id));
      if (idsNaoEncontrados.length > 0) {
        return res.status(400).json({
          error: `IDs inválidos de ingredientes base: ${idsNaoEncontrados.join(', ')}`
        });
      }

      // 🧠 Validação de existência dos extras (se houver)
      let extrasEncontrados = [];
      if (extras?.length > 0) {
        extrasEncontrados = await db.Extra.findAll({
          where: { id: extras },
          attributes: ['id']
        });

        const idsExtras = extrasEncontrados.map(e => e.id);
        const idsFaltando = extras.filter(id => !idsExtras.includes(id));
        if (idsFaltando.length > 0) {
          return res.status(400).json({
            error: `IDs inválidos de extras: ${idsFaltando.join(', ')}`
          });
        }
      }

      // 🔍 Identificação de sabor clássico
      const { saborEncontrado, nome, id: flavorId } = await identificarSabor(baseIngredients);

      const order = await db.Order.create({
        flavorId: saborEncontrado ? flavorId : null,
        customName: saborEncontrado ? nome : 'Café Personalizado'
      });

      await order.setBaseIngredients(baseIngredients);
      if (extras?.length > 0) {
        await order.setExtras(extras);
      }

      const pedidoCompleto = await db.Order.findByPk(order.id, {
        include: [
          { model: db.ClassicFlavor, as: 'classicFlavor' },
          { model: db.BaseIngredient, as: 'baseIngredients', attributes: ['id', 'name'] },
          { model: db.Extra, as: 'extras', attributes: ['id', 'name'] }
        ]
      });

      return res.status(201).json({
        pedidoId: pedidoCompleto.id,
        nome: pedidoCompleto.customName,
        saborClássico: pedidoCompleto.classicFlavor?.name || null,
        ingredientesBase: pedidoCompleto.baseIngredients.map(i => i.name),
        extras: pedidoCompleto.extras.map(e => e.name)
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao registrar o pedido.' });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;

      const pedido = await db.Order.findByPk(id, {
        include: [
          { model: db.ClassicFlavor, as: 'classicFlavor' },
          { model: db.BaseIngredient, as: 'baseIngredients' },
          { model: db.Extra, as: 'extras' }
        ]
      });

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado.' });
      }

      return res.status(200).json({
        pedidoId: pedido.id,
        nome: pedido.customName,
        saborClássico: pedido.classicFlavor?.name || null,
        ingredientesBase: pedido.baseIngredients.map(i => i.name),
        extras: pedido.extras.map(e => e.name)
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar o pedido.' });
    }
  },

  async findAll(req, res) {
    try {
      const pedidos = await db.Order.findAll({
        include: [
          {
            model: db.ClassicFlavor,
            as: 'classicFlavor',
            attributes: ['id', 'name']
          },
          {
            model: db.BaseIngredient,
            as: 'baseIngredients',
            attributes: ['id', 'name'],
            through: { attributes: [] }
          },
          {
            model: db.Extra,
            as: 'extras',
            attributes: ['id', 'name'],
            through: { attributes: [] }
          }
        ],
        order: [['createdAt', 'DESC']]
      });

      const resposta = pedidos.map(p => ({
        pedidoId: p.id,
        nome: p.customName,
        saborClássico: p.classicFlavor?.name || null,
        ingredientesBase: p.baseIngredients.map(i => i.name),
        extras: p.extras.map(e => e.name),
        criadoEm: p.createdAt
      }));

      return res.status(200).json(resposta);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar os pedidos.' });
    }
  }
};