const express = require('express');
const router = express.Router();
const db = require('../database/models');
const IngredientController = require('../controllers/IngredientController.js');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/base', async (req, res) => {
  try {
    const ingredientes = await db.BaseIngredient.findAll({ attributes: ['id', 'name', 'isAvailable'] });
    return res.json(ingredientes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar ingredientes base' });
  }
});

router.get('/extras', async (req, res) => {
  try {
    const extras = await db.Extra.findAll({ attributes: ['id', 'name', 'isAvailable'] });
    return res.json(extras);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar extras' });
  }
});

router.patch('/base/:id/toggle', IngredientController.toggleBaseAvailability);
router.patch('/extra/:id/toggle', IngredientController.toggleExtraAvailability);



module.exports = router;