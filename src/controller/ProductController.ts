
import {Request, Response} from 'express';

import { deleteProductMiddleware } from '../service/ProductService';   

const ProductService = require('../service/ProductService'); 

// Add product to the database
export const addProduct = (req: Request, res: Response) => {
    try {
        const product = ProductService.createProduct(req.body.name, req.body.description);
        res.status(201).send(product);
    } catch (error) {
        console.log('add method :', error); 
        res.status(500).send(error);
    }
};

// get the product by id    
export const getProductById = (req: Request, res: Response) => {
    try {
        const product = ProductService.getProduct(req.params.productId);
        //console.log('controller product: ', product);    

        product.then((result: any) => { 
            console.log('result', result);
            if (!result) {
                res.status(404).send('Product not found');
            } else {
                res.status(200).send(result);
            }
        });        
    } catch (error) {
        console.log('get method :', error);
        res.status(500).send(error);
    }
};

// get all products 
export const getAllProducts = (req: Request, res: Response) => {
    try {
        const products = ProductService.getProducts();
        products.then((result: any) => {
            res.status(200).send(result);
        }); 
    } catch (error) {
        console.log('all method :', error); 
        res.status(500).send(error);
    }
};

// update the product
export const updateProduct = (req: Request, res: Response) => {
    try {
        const product = ProductService.updateProduct(req.params.productId, req.body.name, req.body.description);
        if (!product) {
            res.status(404).send('Product not found');
        } else {
            res.status(200).send(product);
        }
    } catch (error) {
        console.log('update method :', error); 
        res.status(500).send(error);
    }
};

// delete the product by id
export const deleteProduct = (req: Request, res: Response) => {
    try {
        const product = deleteProductMiddleware(req.params.productId);
        if (!product) {
            res.status(404).send('Product not found');
        } else {
            res.status(200).send(product);
        }
    } catch (error) {
        console.log('delete method :', error); 
        res.status(500).send(error);
    }
};





