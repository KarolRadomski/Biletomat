const asyncHandler = require('express-async-handler');

// @desc    Get all places data
// @route   POST /api/upload/uploadCover
// @access  Public

const uploadCover = asyncHandler(async (req, res) => {
  res.json({
    file: req.file.filename,
  });
});

module.exports = {
  uploadCover,
};
