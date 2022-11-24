const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

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
   const orderID = order.id

   //Tutaj powinno byc tworzenie biletu oraz kodu QR

   req.body.seats.forEach(async (seat) => {
      await prisma.ticket.create({
         data: {
            orderId: Number(orderID),
            eventId: Number(seat.eventID),
            seatInSectorId: Number(seat.seatID),
            QRCodeURL: '/'
         }
      })
   })

   //Response after create
   if (order) {
      res.status(201).json({
         order,
      });
   } else {
      res.status(400).json({
         message: 'Błąd',
      });
      throw new Error('Invalid user Data');
   }
});


module.exports = {
   buyHandler,

};
