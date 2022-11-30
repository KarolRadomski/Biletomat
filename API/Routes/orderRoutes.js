// route:   /API/event

const express = require('express');
const router = express.Router();

const { buyHandler, userOrders, ticketData } = require('../Controllers/orderControllers.js');
router.post('/create', buyHandler);
router.post('/userOrders', userOrders);
router.post('/service', ticketData);

module.exports = router;
