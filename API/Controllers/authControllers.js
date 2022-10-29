const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

// JWT token generator
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

//Routes handling

// @desc    User register
// @route   POST /api/auth
// @access  Public

const register = asyncHandler(async (req, res) => {
  const { fname, lname, email, password } = req.body;

  if (!fname || !lname || !email || !password) {
    res.status(400);
    throw new Error('Missing data');
  }

  // Check if user exists

  const userExists = await prisma.User.findUnique({
    where: {
      email: email,
    },
  });

  if (userExists) {
    res.status(400).json({
      message: 'Adres email jest już zajęty',
    });
    throw new Error('User already exists');
  }

  //Hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await prisma.User.create({
    data: {
      fname: fname,
      lname: lname,
      email: email,
      password: hashedPassword,
    },
  });
  console.log(user.id);
  //Response after create
  if (user) {
    res.status(201).json({
      id: user.id,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400).json({
      message: 'Błąd podczas rejestracji, spróbuj ponownie',
    });
    throw new Error('Invalid user Data');
  }
});

// @desc    User login
// @route   POST /api/auth/login
// @access  Public

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Fill all fields');
  }

  //Check for user email
  const user = await prisma.User.findUnique({
    where: {
      email,
    },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      id: user.id,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });
  } else {
    res.status(400).json({
      message: 'Niepoprawne dane logowania',
    });
    throw new Error('Niepoprawne dane logowania');
  }
});

// @desc    User login
// @route   POST /api/auth/login
// @access  Public

const create = asyncHandler(async (req, res) => {
  for (let i = 3; i <= 5; i++) {
    await prisma.Seat.create({
      data: {
        row: 2,
        number: i,
        sectorId: Number(8),
      },
    });
  }
  res.status(201).json({
    message: 'Done',
  });
});

module.exports = {
  register,
  login,
  create,
};
