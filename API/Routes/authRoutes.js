// route:   /API/auth

const express = require('express');
const router = express.Router();

const { register, login, create } = require('../Controllers/authControllers.js');

router.post('/register', register);
router.post('/login', login);
router.post('/create', create);

module.exports = router;
