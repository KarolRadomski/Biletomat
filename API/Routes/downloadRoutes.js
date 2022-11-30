// route:   /API/place

const express = require('express');
const router = express.Router();

const { downloadTicket } = require('../Controllers/downloadControllers.js');

router.get('/:filename', downloadTicket);

module.exports = router;
