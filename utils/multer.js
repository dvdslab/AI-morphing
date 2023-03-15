const multer = require("multer");
const path = require("path");

// multer storage configuration

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg" && ext !== ".gif") {
      return cb(new Error("Only images and gifs are allowed"), false);
    }
    cb(null, true);
  },
});