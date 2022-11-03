// route:   /API/place

const express = require('express');
const router = express.Router();

const { getPlaces, createSeats } = require('../Controllers/placeControllers.js');

router.get('/getPlaces', getPlaces);
router.post('/createSeats', createSeats);

module.exports = router;
