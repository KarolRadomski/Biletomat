const asyncHandler = require('express-async-handler');

// @desc    Get all places data
// @route   GET /api/place
// @access  Public

const uploadCover = asyncHandler(async (req, res) => {
  res.json('file uploaded successfully');
});

module.exports = {
  uploadCover,
};
