
import express from 'express';
import {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} from '../controller/ProductController'; 
const router = express.Router(); 


router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.post('/products', addProduct);
router.patch('/products/:productId', updateProduct);
router.delete('/products/:productId', deleteProduct); 

export default router; 
