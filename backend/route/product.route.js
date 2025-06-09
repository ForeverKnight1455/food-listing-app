import express from 'express';
import { createProduct,updateProduct,deleteProduct,getProducts } from '../controller/product.controller.js';

const productrouter = express.Router();

productrouter.get('/', getProducts);
productrouter.delete('/:id', deleteProduct);
productrouter.post('/', createProduct);
productrouter.patch('/:id', updateProduct);

export default productrouter;