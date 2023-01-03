const multer = require("multer")
const path = require("path")


const diskstorage = multer.diskStorage({
  destination:  (req,file,cb)=>{
    cb(null, path.join(__dirname, "..", "images"))

  },
  filename: (req, file, cb)=>{
      cb(null, Date.now() + path.extname(file.originalname))
  }
})
const fileUpload = multer({
  storage:diskstorage,
  limits:{ fileSize: "10000000"},
  fileFilter: (req,file,cb)=>{
    const fileTypes = /jpeg|jpg|png|gif/
    const mimeTypes = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if(mimeTypes && extname){
      return cb(null, true)
    }
    cb("Files format are invalid")
  }
}).single("image")

const fs = require('fs');

fs.access(path.join(__dirname, "..", "images")), fs.constants.W_OK, (err) => {
  console.log(err ? 'No tienes permisos de escritura en la carpeta "images"' : 'Tienes permisos de escritura en la carpeta "images"');
};

module.exports = fileUpload;