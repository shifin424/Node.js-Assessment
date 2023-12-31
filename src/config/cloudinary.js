import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv'
dotenv.config()
import ErrorResponse from '../middleware/error/errorResponse.js';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "Crud-App",
        allowedFormats: ["jpeg", "png", "jpg"],
    },
});

const fileFilter = (req, file, cb) => {
    if (!["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
      return cb(new Error("File is not an image"));
    }
    return cb(null, true);
  };
  
  const upload = multer({ storage, fileFilter });
  const uploadImage = (req, res, next) => {
  
  
    upload.single('productImage')(req, res, (err) => {
      if (err) {
        console.error(err);
        if (err.message === "File is not an image") {
            return next(ErrorResponse.badRequest('File is not an image'));
        }
        return res.status(500).json({ error: 'An error occurred during file upload' });
      }else{
        console.log("reached to cloudinary")
       return next();
      }
    });
  };
  
  
  export default uploadImage;
