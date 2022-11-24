// route:   /API/event

const express = require('express');
const router = express.Router();

const { buyHandler } = require('../Controllers/orderControllers.js');
router.post('/create', buyHandler);

module.exports = router;
