'use strict';

const db = require('../database/models');

module.exports = {
   async toggleBaseAvailability(req, res) {
  try {
    const { id } = req.params;

    // Descobre valor atual
    const [ingredientes] = await db.sequelize.query(`
      SELECT "isAvailable", "name"
      FROM "BaseIngredients"
      WHERE "id" = :id
    `, { replacements: { id }, type: db.Sequelize.QueryTypes.SELECT });

    if (!ingredientes) {
      return res.status(404).json({ error: 'Ingrediente base não encontrado.' });
    }

    const valorAtual = ingredientes.isAvailable;
    const novoValor = !valorAtual;

    // Atualiza diretamente
    await db.sequelize.query(`
      UPDATE "BaseIngredients"
      SET "isAvailable" = :novoValor
      WHERE "id" = :id
    `, { replacements: { id, novoValor } });

    return res.status(200).json({
      message: `Ingrediente base "${ingredientes.name}" agora está ${novoValor ? 'disponível' : 'indisponível'}.`,
      id,
      name: ingredientes.name,
      isAvailable: novoValor
    });
  } catch (error) {
    console.error('🔥 Erro direto no SQL:', error);
    return res.status(500).json({ error: 'Erro ao forçar atualização do ingrediente base.' });
  }
},
 async toggleExtraAvailability(req, res) {
  try {
    const { id } = req.params;

    // Consulta o valor atual direto no banco
    const [extras] = await db.sequelize.query(`
      SELECT "isAvailable", "name"
      FROM "Extras"
      WHERE "id" = :id
    `, {
      replacements: { id },
      type: db.Sequelize.QueryTypes.SELECT
    });

    if (!extras) {
      return res.status(404).json({ error: 'Ingrediente extra não encontrado.' });
    }

    const valorAtual = extras.isAvailable;
    const novoValor = !valorAtual;

    // Atualiza diretamente via SQL
    await db.sequelize.query(`
      UPDATE "Extras"
      SET "isAvailable" = :novoValor
      WHERE "id" = :id
    `, {
      replacements: { id, novoValor }
    });

    return res.status(200).json({
      message: `Ingrediente extra "${extras.name}" agora está ${novoValor ? 'disponível' : 'indisponível'}.`,
      id,
      name: extras.name,
      isAvailable: novoValor
    });
  } catch (error) {
    console.error('🔥 Erro ao atualizar ingrediente extra:', error);
    return res.status(500).json({ error: 'Erro ao atualizar ingrediente extra.' });
  }
}

};