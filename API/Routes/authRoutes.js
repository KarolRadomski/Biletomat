// route:   /API/auth

const express = require('express');
const router = express.Router();

const { register, login, create, createServiceAccount } = require('../Controllers/authControllers.js');

router.post('/register', register);
router.post('/login', login);
router.post('/create', create);
router.post('/service', createServiceAccount);

module.exports = router;
