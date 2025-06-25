import express from 'express';
import { createProduct,updateProduct,deleteProduct,getProducts } from '../controller/product.controller.js';

const productrouter = express.Router();

productrouter.get('/', getProducts);
productrouter.post('/', createProduct);
productrouter.patch('/:id', updateProduct);
productrouter.delete('/:id', deleteProduct);

export default productrouter;