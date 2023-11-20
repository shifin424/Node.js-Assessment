import express from 'express';
import { addProduct, deleteProductById, getFilteredProducts, getProductById } from '../controllers/productController.js';
import uploadImage from '../config/cloudinary.js';
import productValidation from '../middleware/validations/productValidation.js';

const router = express.Router();

router.post('/products',uploadImage,productValidation,addProduct)

router.get('/products/:id',getProductById)

router.get('/productsData',getFilteredProducts)

router.delete('/products/:id',deleteProductById)

export default router;