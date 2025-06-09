import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
        console.log('Products retrieved successfully:', products);
    }

    catch(error) {
        console.error('Error retrieving products:', error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
}

export const deleteProduct = async (req,res) => {
    const id = req.params.id;
    console.log('Received request to delete product with ID:', id);
    try{
        const product = await Product.findByIdAndDelete(id);

        if(!product) {
            console.log('Product not found with ID:', id);
            return res.status(404).json({success: false, message: 'Product not found'});
        }
        res.status(200).json({success: true, message: 'Product deleted successfully', data: product});
    }
    catch(error) {
        console.error('Error deleting product:', error);
        console.log('Error deleting product with ID:', id, 'Error message:', error.message);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: 'All fields are required'});
    }
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success: true, message: 'Product created successfully', data: newProduct});
        res.console.log('Product created successfully:', newProduct);
    }
    catch(err) {
        console.error('Error creating product:', err);
        console.log('Error creating product:', err.message);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;

    if(!updatedProduct.name || !updatedProduct.price || !updatedProduct.image) {
        return res.status(400).json({success: false, message: 'All fields are required'});
    }

    try {
        const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

        if (!product) {
            console.log('Product not found with ID:', id);
            return res.status(404).json({success: false, message: 'Product not found'});
        }

        res.status(200).json({success: true, message: 'Product updated successfully', data: product});
        console.log('Product updated successfully:', product);
    } catch (error) {
        console.error('Error updating product:', error);
        console.log('Error updating product with ID:', id, 'Error message:', error.message);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
}