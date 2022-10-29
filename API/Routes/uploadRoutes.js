// route:   /API/place

const express = require('express');
const router = express.Router();
const multerConfig = require('../config/multer');

const { uploadCover } = require('../Controllers/uploadControllers.js');

router.post('/uploadCover', multerConfig.saveToUploads, uploadCover);

module.exports = router;
