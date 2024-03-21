import mongoose, { Schema, Model } from 'mongoose'; 

// create a new interface that represent a document in MongoDB 
interface IProduct {
    name: string;
    description: string | null;
} 

// create a new Mongoose schema of type IProduct
const productScheme = new Schema<IProduct>({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: false } 
}); 

// Create a Model for IProduct 
const Product: Model<IProduct> = mongoose.model('Product', productScheme); 

export { Product };
