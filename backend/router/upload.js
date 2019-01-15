const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();

const DIR = './uploads';
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      console.log(1,file);
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

router.post('/upload',upload.single('photo'), function (req, res) {
    console.log(2,req.file);
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});

module.exports = router;

