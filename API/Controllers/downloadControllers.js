const asyncHandler = require('express-async-handler');

// @desc    Download ticket
// @route   GET /download/:filename
// @access  Public

const downloadTicket = asyncHandler(async (req, res) => {
  const filePath = __dirname + '/../tickets/' + req.params.filename;
  res.download(
    filePath,
    req.params.filename, // Remember to include file extension
    (err) => {
      if (err) {
        res.send({
          error: err,
          msg: 'Problem downloading the file',
        });
      }
    }
  );
});

module.exports = {
  downloadTicket,
};
