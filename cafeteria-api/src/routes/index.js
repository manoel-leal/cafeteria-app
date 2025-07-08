const express = require('express');
const router = express.Router();

const orderRoutes = require('./order.routes');
const ingredientRoutes = require('./ingredient.routes');
const menuRoutes = require('./menu.routes');
const authRoutes = require('./auth.routes');

router.use('/orders', orderRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/menu', menuRoutes);
router.use('/auth', authRoutes);

module.exports = router;