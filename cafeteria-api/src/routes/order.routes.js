const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController.js');
const auth = require('../middlewares/auth');

router.use(auth);

router.post('/', OrderController.create);
router.get('/', OrderController.findAll);
router.get('/:id', OrderController.findById);

module.exports = router;