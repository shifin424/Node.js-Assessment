import Product from "../models/productSchema.js";

export const createProduct = async (productData) => {
    try {

        const newProduct = new Product({
            productName: productData.productName,
            productCategory: productData.productCategory,
            imageUrl: {
                url: productData.path,
                public_id: productData.filename,
            },
            productDescription: productData.productDescription,
        });
        const savedProduct = await newProduct.save();

        return savedProduct;

    } catch (err) {
        throw new Error("Failed to create Product")
    }
}

export const findProductByName = async (productName) => {
    try {
        const product = await Product.findOne({ productName });
        return product;
    } catch (err) {
        throw new Error("Failed to Find Product")
    }
}

export const findProductById = async (productId) => {
    try {

        const product = await Product.findById(productId)
        return product || null;

    } catch (err) {
        throw new Error("Failed to fetch Product using Id")
    }
}

export const findFilteredProducts = async (page, pageSize, productName, category) => {
    try {
        const filter = {};
        if (productName) {
            filter.productName = { $regex: new RegExp(productName, 'i') };
        }
        if (category) {
            filter.productCategory = { $regex: new RegExp(category, 'i') };
        }

        const products = await Product.find(filter)
            .skip((page - 1) * pageSize)
            .limit(parseInt(pageSize));

        return products;
    } catch (err) {
        throw new Error("Failed to fetch filtered data")
    }
}

export const deleteProduct = async (productId) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        return deletedProduct;
    } catch (err) {
        throw new Error("Failed to delete the product")
    }
}