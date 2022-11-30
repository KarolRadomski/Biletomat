const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

// @desc    Create event
// @route   POST /api/event/create
// @access  Public

const createEvents = asyncHandler(async (req, res) => {
  //Do zrobienia dokładniejsza obsługa błędów, jak któregoś nie uda się utworzyć to pasuje usunąć wszystko co wcześniej zostało utworzone

  const event = await prisma.event.create({
    data: {
      name: req.body.event.name,
      date: req.body.event.date,
      description: req.body.event.description,
      startSellingDate: req.body.event.startSellingDate,
      endSellingDate: req.body.event.endSellingDate,
      coverUrl: req.body.event.coverUrl,
      placeId: Number(req.body.event.placeID),
    },
  });

  var seats = {};
  req.body.sectorDetails.forEach(async (sector) => {
    //tworzysz tutaj sectorDetails bo masz z góry id eventu oraz id sektorów z sector.sectorId

    const sectorDetail = await prisma.sectorDetail.create({
      data: {
        price: parseFloat(sector.price),
        eventId: Number(event.id),
        sectorId: sector.sectorId,
      },
    });

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
        await prisma.seatInSector.create({
          data: {
            reserved: true,
            seatId: seat.id,
            sectorDetailId: sectorDetail.id,
          },
        });
      } else {
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

// @desc    Update event
// @route   POST /api/event/update
// @access  Public

const updateEvent = asyncHandler(async (req, res) => {
  //Do zrobienia dokładniejsza obsługa błędów, jak któregoś nie uda się utworzyć to pasuje usunąć wszystko co wcześniej zostało utworzone
  // console.log(req.body);
  // console.log(
  //   `EVENT: nazwa: ${req.body.event.name}, data: ${req.body.event.date}, opis: ${req.body.event.description}, ID miejsca: ${req.body.event.placeID}`
  // );

  const event = await prisma.event.update({
    where: {
      id: req.body.event.id,
    },
    data: {
      name: req.body.event.name,
      date: req.body.event.date,
      description: req.body.event.description,
      startSellingDate: req.body.event.startSellingDate,
      endSellingDate: req.body.event.endSellingDate,
      coverUrl: req.body.event.coverUrl,
    },
  });

  await req.body.sectorDetails.forEach(async (sector) => {
    await prisma.sectorDetail.updateMany({
      where: {
        eventId: req.body.event.id,
        sectorId: sector.sectorId,
      },
      data: {
        price: parseFloat(sector.price),
      },
    });

    await req.body.reservedSeatsId.forEach(async (seat) => {
      await prisma.seatInSector.updateMany({
        where: {
          seatId: seat,
          sectorDetail: {
            eventId: req.body.event.id,
          },
        },
        data: {
          reserved: true,
        },
      });
    });
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

// @desc    Get all events
// @route   GET /api/place/getall
// @access  Public

const getEvents = asyncHandler(async (req, res) => {
  var date = new Date();
  date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
  date = date.toISOString();

  const events = await prisma.event.findMany({
    where: {
      date: {
        gt: date,
      },
    },
    select: {
      id: true,
      name: true,
      date: true,
      startSellingDate: true,
      endSellingDate: true,
      description: true,
      coverUrl: true,
      placeId: true,
      place: {
        select: {
          name: true,
        },
      },
    },
  });

  events.forEach(async (event) => {
    const resp = await prisma.Place.findUnique({
      where: {
        id: Number(event.id),
      },
    });
    event.placeName = resp.name;
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
// @desc    Get available events
// @route   GET /api/event/getavailable
// @access  Public

const getAvailableEvents = asyncHandler(async (req, res) => {
  var date = new Date();
  date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
  date = date.toISOString();

  const events = await prisma.event.findMany({
    where: {
      date: {
        gt: date,
      },
      startSellingDate: {
        lt: date,
      },
      endSellingDate: {
        gt: date,
      },
    },
    select: {
      id: true,
      name: true,
      date: true,
      startSellingDate: true,
      endSellingDate: true,
      description: true,
      coverUrl: true,
      placeId: true,
      place: {
        select: {
          name: true,
        },
      },
    },
  });
  console.log(events);
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

// @desc    Get event data by id
// @route   GET /api/data/getData
// @access  Public

const getEventDataByID = asyncHandler(async (req, res) => {
  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(req.body.id),
    },
    select: {
      id: true,
      name: true,
      date: true,
      startSellingDate: true,
      endSellingDate: true,
      description: true,
      coverUrl: true,
      placeId: true,
      place: {
        select: {
          name: true,
          address: true,
        },
      },
      sectorDetails: {
        select: {
          price: true,
          sectorId: true,
          seatsInSectors: {
            select: {
              id: true,
              reserved: true,
              seatId: true,
              ticket: true,
            },
          },
        },
      },
    },
  });

  //Response after get
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

// @desc    Get seat data by id
// @route   GET /api/seat
// @access  Public

const getSeatData = asyncHandler(async (req, res) => {
  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(req.body.eventID),
    },
    select: {
      name: true,
      endSellingDate: true,
      date: true,
      sectorDetails: {
        select: {
          seatsInSectors: {
            where: {
              seatId: parseInt(req.body.seatID),
            },
            include: {
              seat: {
                select: {
                  row: true,
                  number: true,
                  seatInSectors: {
                    select: {
                      id: true,
                      sectorDetail: {
                        select: {
                          sector: {
                            select: {
                              name: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  //Response after get
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
  getAvailableEvents,
  getEventDataByID,
  createEvents,
  updateEvent,
  getSeatData,
};
