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
const createSeats = asyncHandler(async (req, res) => {
  // Check if user exists
  const { row, fnumber, lnumber, sectorID } = req.body;
  console.log('ROW: ', row);
  console.log('Start number: ', fnumber);
  console.log('End number: ', lnumber);
  console.log('SectorID: ', sectorID);

  for (let i = fnumber; i <= lnumber; i++) {
    console.log('miejsce: ', i);
    await prisma.Seat.create({
      data: {
        row: Number(row),
        number: Number(i),
        sectorId: Number(sectorID),
      },
    });
  }

  res.json('DONE');
});

module.exports = {
  getPlaces,
  createSeats,
};
