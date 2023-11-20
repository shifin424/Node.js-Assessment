import Joi from 'joi';
import ErrorResponse from '../error/errorResponse.js';

const productSchema = Joi.object({
  productName: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Product name must be a string',
    'string.empty': 'Product name cannot be left empty',
    'string.min': 'Product name should have a minimum length of 3 characters',
    'string.max': 'Product name should have a maximum length of 30 characters',
    'any.required': 'Product name is required',
  }),
  productCategory: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Product category must be a string',
    'string.empty': 'Product category cannot be left empty',
    'string.min': 'Product category should have a minimum length of 3 characters',
    'string.max': 'Product category should have a maximum length of 30 characters',
    'any.required': 'Product category is required',
  }),
  productDescription: Joi.string().max(240).required().messages({
    'string.base': 'Product description must be a string',
    'string.empty': 'Product description cannot be left empty',
    'string.max': 'Product description should have a maximum length of 240 characters',
    'any.required': 'Product description is required',
  }),
  path: Joi.string().min(1).required().messages({
    'string.base': 'Path must be a string',
    'string.empty': 'Path cannot be left empty',
    'string.min': 'Path should have a minimum length of 1 character',
    'any.required': 'Path is required',
  }),
  filename: Joi.string().min(1).required().messages({
    'string.base': 'Filename must be a string',
    'string.empty': 'Filename cannot be left empty',
    'string.min': 'Filename should have a minimum length of 1 character',
    'any.required': 'Filename is required',
  }),
});

const productValidation = (req, res, next) => {
  const { productName, productCategory, productDescription} = req.body;
  const {path,filename} = req.file

  const { value: data, error } = productSchema.validate(
    { productName, productCategory, productDescription, path, filename },
    { abortEarly: false }
  );

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    next(ErrorResponse.badRequest(errors));
  } else {
    res.locals.validData = data;
    next();
  }
};

export default productValidation;
