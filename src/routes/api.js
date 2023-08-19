const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const menuController = require('../controllers/menuController');
const orderController = require('../controllers/orderController');

// Маршруты для работы с пользователями
router.post('/register', userController.register);
router.post('/login', userController.login);

// Маршруты для работы с меню
router.get('/menu', menuController.getMenu);

// Маршруты для работы с заказами
router.post('/create-order', orderController.createOrder);

module.exports = router;
