const multer = require("multer")
const path = require("path")



const diskstorage = multer.diskStorage({
  destination:  (req,file,cb)=>{
    cb(null,"images")
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

/* module.exports = function valPostRecipe(req,res,next){
    const {
        title,
        summary,
      } = req.body;
      if(!title&&!summary){return res.status(500).json({error:"Missing title and summary"})}
      if(!title){return res.status(500).json({error:"Missing title"})}
      if(!summary){return res.status(500).json({error:"Missing summary"})}
     fileUpload()
      next()
} */

module.exports = fileUpload;