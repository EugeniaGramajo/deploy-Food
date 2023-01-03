const multer = require("multer")
const path = require("path")

const url = path.join(__dirname, "..", "images")
const diskstorage = multer.diskStorage({
  destination:  (req,file,cb)=>{
    cb(null,url)
  },
  filename: (req, file, cb)=>{
      cb(null, Date.now() + path.extname(file.originalname))
  }
})
console.log(url)

fs.mkdir(url, { recursive: true }, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Carpeta "images" creada');
  }
});

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

console.log(path.join(__dirname, "images"))

const fs = require('fs');

fs.access(url, fs.constants.W_OK, (err) => {
  console.log(err ? 'No tienes permisos de escritura en la carpeta "images"' : 'Tienes permisos de escritura en la carpeta "images"');
});

module.exports = fileUpload;