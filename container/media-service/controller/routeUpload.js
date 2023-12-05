const express = require('express');
const router = express.Router();
const cloudinary = require("../cloudinary.config");
const upload = require("../middleware/multer");

// multiple upload
router.post('/upload', upload.array('images', 4), function (req, res) {
  const files = req.files;

  // the process of uploading files to Cloudinary
  const promises = files.map(file => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(file.path, (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  });

  // when all installation processes are completed
  Promise.all(promises)
    .then(results => {
      res.status(200).json({
        success: true,
        message: "Uploaded!",
        data: results
      });
    })
    .catch(error => {
      res.status(500).json({
        success: false,
        message: "Error",
        error: error
      });
    });
});

module.exports = router;
