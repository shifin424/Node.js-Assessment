import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productCategory: {
            type: String,
            required: true
        },
        imageUrl: {
            url: {
                type: String,
                required: true
            },
            public_id: {
                type: String,
                required: true
            }
        },
        productDescription: {
            type: String,
            required: true
        },
    });

const Product = mongoose.model('Product', productSchema);

export default Product;