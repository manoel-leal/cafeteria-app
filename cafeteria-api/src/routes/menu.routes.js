const express = require('express');
const router = express.Router();
const db = require('../database/models');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/', async (req, res) => {
  try {
    const sabores = await db.ClassicFlavor.findAll({
      attributes: ['name'],
      include: {
        model: db.BaseIngredient,
        as: 'baseIngredients',
        attributes: ['name'],
        through: { attributes: [] }
      }
    });

    const formatado = sabores.map(flavor => ({
      name: flavor.name,
      ingredients: flavor.baseIngredients.map(i => i.name)
    }));

    return res.json(formatado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o menu' });
  }
});

module.exports = router;