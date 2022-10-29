// route:   /API/event

const express = require('express');
const router = express.Router();

const { getEvents, createEvents } = require('../Controllers/eventControllers.js');

router.get('/getall', getEvents);
router.post('/create', createEvents);

module.exports = router;
