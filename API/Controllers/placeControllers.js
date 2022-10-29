const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

// @desc    Get all places data
// @route   GET /api/place
// @access  Public

const getPlaces = asyncHandler(async (req, res) => {
  // Check if user exists

  const places = await prisma.Place.findMany();

  if (!places) {
    res.status(400).json({
      message: 'Błąd podczas wczytywania danych',
    });
    throw new Error('Place fetch error');
  } else {
    res.status(201).json({
      places,
    });
  }
});

module.exports = {
  getPlaces,
};
