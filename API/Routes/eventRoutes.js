// route:   /API/event

const express = require('express');
const router = express.Router();

const { getEvents, createEvents, getAvailableEvents, getEventDataByID, updateEvent } = require('../Controllers/eventControllers.js');

router.get('/getall', getEvents);
router.get('/getavailable', getAvailableEvents);
router.post('/getData', getEventDataByID);
router.post('/create', createEvents);
router.post('/update', updateEvent);

module.exports = router;
