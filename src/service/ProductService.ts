
import { Product } from "../model/product";

export const createProduct = (name: string, description: string | null) => {
    const product = new Product({ name, description });
    product.save();
    return product;
};

export const getProduct =  async (id: string) => {
    console.log('get --------------------id------', id);
    const product = await Product.findById(id);
    return product;
};

export const getProducts = async () =>  {
    const products = await Product.find();
    console.log('----products', products);  
    return products;
};

export const updateProduct = async (id: string, name: string, description: string | null) => {
    const product = await Product.findById(id);
    if (product) {
       product.name = name;
       product.description = description;
       product.save();
    }
    return product;
};

const  deleteProductMiddleware = async (id: string) => { 
    const product = await Product.findByIdAndDelete(id);
    return product;
}

export { deleteProductMiddleware };
 
