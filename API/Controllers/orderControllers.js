const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');
const QRCode = require('qrcode');
const PDFGenerator = require('pdfkit');
const fs = require('fs');

const prisma = new PrismaClient();

// @desc    Handle buy tickets (create order and tickets)
// @route   POST /api/order/create
// @access  Public

const buyHandler = asyncHandler(async (req, res) => {
  const order = await prisma.order.create({
    data: {
      userId: Number(req.body.details.userID),
      isPaid: true,
    },
  });
  const orderID = order.id;

  /////////////////////////////////////////////////
  req.body.seats.forEach(async (seat) => {
    const ticket = await prisma.ticket.create({
      data: {
        orderId: Number(orderID),
        eventId: Number(seat.eventID),
        seatInSectorId: Number(seat.seatID),
        QRCodeURL: '/',
      },
    });

    //generate PDF with ticket
    QRCode.toDataURL(`https://biletomat-karradomski.herokuapp.com/service/${ticket.id}`, function (err, url) {
      //PDF generator not polish
      let theOutput = new PDFGenerator({ size: 'A4' });
      theOutput.pipe(fs.createWriteStream(`API/tickets/Bilet-${ticket.id}.pdf`));
      theOutput.font('API/tickets/Roboto-Regular.ttf');
      theOutput
        .image(url, 25, 25, { width: 200 })
        .fontSize(20)
        .text(`Nazwa wydarzenia: ${seat.eventName}`, 225, 50)
        .fontSize(16)
        .text(`Data wydarzenia: ${seat.date.slice(0, 10)} ${seat.date.slice(11, 16)}`, 225, 120)
        .text(`Sektor: ${seat.sectorName}`, 225, 140)
        .text(`Rząd: ${seat.row}`, 225, 160)
        .text(`Numer miejsca: ${seat.number}`, 225, 180);
      theOutput.end();
      console.log(err);
    });
  });

  //   console.log(theOutput);
  //Response after create
  res.status(201).json({
    output: 'ok',
  });
});

// @desc    Get certain user orders and tickets
// @route   GET /api/order/userOrders
// @access  Public

const userOrders = asyncHandler(async (req, res) => {
  const orders = await prisma.order.findMany({
    where: {
      userId: {
        equals: Number(req.body.id),
      },
    },
    select: {
      id: true,
      createdAt: true,
      tickets: {
        select: {
          id: true,
          event: {
            select: {
              name: true,
              date: true,
            },
          },
          seatInSector: {
            select: {
              seat: {
                select: {
                  row: true,
                  number: true,
                  sector: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
              sectorDetail: {
                select: {
                  price: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (orders)
    res.status(201).json({
      orders: orders,
    });
});

// @desc    Get data about ticket
// @route   POST /api/order/service
// @access  Public
const ticketData = asyncHandler(async (req, res) => {
  console.log(req.body.id);
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: Number(req.body.id),
    },
    select: {
      seatInSector: {
        select: {
          seat: {
            select: {
              row: true,
              number: true,
              sector: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
      event: {
        select: {
          name: true,
          date: true,
        },
      },
      order: {
        select: {
          user: {
            select: {
              fname: true,
              lname: true,
            },
          },
        },
      },
    },
  });

  res.json(ticket);
});
module.exports = {
  buyHandler,
  userOrders,
  ticketData,
};
