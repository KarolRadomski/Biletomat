const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

// @desc    Get avaliable events
// @route   GET /api/place/getall
// @access  Public

const getEvents = asyncHandler(async (req, res) => {
  var date2 = new Date();
  date2.setTime(date2.getTime() + 2 * 60 * 60 * 1000);
  date2 = date2.toISOString();

  const events = await prisma.event.findMany({
    where: {
      date: {
        gt: date2,
      },
    },
  });

  //Response after get
  if (events) {
    res.status(201).json({
      events,
    });
  } else {
    res.status(400).json({
      message: 'Błąd',
    });
    throw new Error('Invalid user Data');
  }
});

// @desc    Get avaliable events
// @route   POST /api/event/create
// @access  Public

const createEvents = asyncHandler(async (req, res) => {
  //Do zrobienia dokładniejsza obsługa błędów, jak któregoś nie uda się utworzyć to pasuje usunąć wszystko co wcześniej zostało utworzone
  console.log(
    `EVENT: nazwa: ${req.body.event.name}, data: ${req.body.event.date}, opis: ${req.body.event.description}, ID miejsca: ${req.body.event.placeID}`
  );

  const event = await prisma.event.create({
    data: {
      name: req.body.event.name,
      date: req.body.event.date,
      description: req.body.event.description,
      placeId: Number(req.body.event.placeID),
    },
  });

  console.log(event.id);

  var seats = {};
  req.body.sectorDetails.forEach(async (sector) => {
    //tworzysz tutaj sectorDetails bo masz z góry id eventu oraz id sektorów z sector.sectorId
    console.log(`SECTORDETAILS: ID sektora: ${sector.sectorId}, Cena dla sektora ${sector.price} id eventu znam`);
    const sectorDetail = await prisma.sectorDetail.create({
      data: {
        price: parseFloat(sector.price),
        eventId: Number(event.id),
        sectorId: sector.sectorId,
      },
    });

    console.log(sectorDetail);

    seats = await prisma.seat.findMany({
      where: {
        sectorId: {
          equals: sector.sectorId,
        },
      },
    });
    // console.log(seats);
    seats.forEach(async (seat) => {
      if (req.body.reservedSeatsId.includes(seat.id)) {
        console.log(`SEATINSECTOR: ID sektorDETAILS znasz , ID miejsca ${seat.id} ale zarezerwowane`);
        await prisma.seatInSector.create({
          data: {
            reserved: true,
            seatId: seat.id,
            sectorDetailId: sectorDetail.id,
          },
        });
      } else {
        console.log(`SEATINSECTOR: ID sektorDETAILS znasz, ID miejsca ${seat.id}`);
        await prisma.seatInSector.create({
          data: {
            reserved: false,
            seatId: seat.id,
            sectorDetailId: sectorDetail.id,
          },
        });
      }
    });
    // console.log(`sektor o ID: ${sector.sectorId} ma takie miejsca ${seats}`);
  });

  //Response after create
  if (event) {
    res.status(201).json({
      event,
    });
  } else {
    res.status(400).json({
      message: 'Błąd',
    });
    throw new Error('Invalid user Data');
  }
});

module.exports = {
  getEvents,
  createEvents,
};
