// route:   /API/place

const express = require('express');
const router = express.Router();

const { getPlaces } = require('../Controllers/placeControllers.js');

router.get('/getPlaces', getPlaces);

module.exports = router;
