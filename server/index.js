const express = require('express');
const  multer= require("multer");
const docToPdf = require('docx-pdf');
const cors =require('cors');
const path = require('path');
const app = express()
const port = 3000

app.use(cors());

// setting up the file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});



const upload = multer({ storage: storage });
app.post('/convertFile', upload.single('file'), (req, res, next)=> {
       
  try{

    if(!req.file){
      return res.status(400).json({
        message: "No File Uploaded",
      })
    }
    // Output path file
    let op= path.join(__dirname,"files",`${req.file.originalname}.pdf`);
    docToPdf(req.file.path, op ,(err,result)=>{
      if(err){
        console.log(err);
        return res.status(500).json({
        message: "Error while converting to pdf",
      });
      }
      res.download(op,()=>{

        console.log('File Downloaded');
      })
    });
  }catch(error){
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});