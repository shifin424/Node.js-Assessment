import { createProduct,deleteProduct,findFilteredProducts, findProductById, findProductByName } from "../repositories/productRepositories.js";
import ErrorResponse from '../middleware/error/errorResponse.js'

export const addProduct = async (req, res, next) => {
    try {
        const { path, filename } = req.file
        const { productName, productCategory, productDescription } = req.body

        const productData = {
            productName,
            productCategory,
            path,
            filename,
            productDescription,
        };

        const existingProduct = await findProductByName(productName);

        if (existingProduct) {
            res.status(400).json({ message: 'Product with the same name already exists' });
            return;
        }

        const savedProduct = await createProduct(productData);

        res.status(200).json({ message: "success", product: savedProduct })
    } catch (error) {
        return next(ErrorResponse.internalError(error.message));
    }

}


export const getProductById = async (req, res, next) => {
    try {

        const productId = req.params.id;
        if (!productId) {
            return next(ErrorResponse.badRequest('Product ID is required'));

        }
        const product = await findProductById(productId);

        if (!product) {
            return next(ErrorResponse.notFound('Product not found'));
        } else {
            res.status(200).json({ message: 'success', product })
        }
    } catch (error) {
        return next(ErrorResponse.internalError(error.message));
    }
}


export const getFilteredProducts = async (req, res, next) => {
    try {

        const { page = 1, pageSize = 10, productName, category } = req.query;

        const products = await findFilteredProducts(page, pageSize, productName, category);

        res.status(200).json({ message: 'success', products });

    } catch (error) {
        return next(ErrorResponse.internalError(error.message));
    }
}

export const deleteProductById = async (req, res, next) => {
    try {
      const productId = req.params.id; 
  
      if (!productId) {
        res.status(400).json({ message: 'Product ID is required' });
        return;
      }
  
      const deletedProduct = await deleteProduct(productId);
  
      if (!deletedProduct) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
  
      res.status(200).json({ message: 'success', deletedProduct });
    } catch (error) {
      return next(ErrorResponse.internalError(error.message));
    }
  };