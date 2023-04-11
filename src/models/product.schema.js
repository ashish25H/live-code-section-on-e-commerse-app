import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
 name:{
    type:String,
    required:[true,'please give product name'],
    trim:true,
    maxLength:[120,'product name should not more then 120 char'],
 },
 price:{
    type:Number,
    required:[true,'provide a price'],
    maxLength:[5,'not mode then 5 char'],
 },
 description:{
    type:String,
 },
 photo:[
    {
        secure_url:{
            type:String,
            required: true,
        }
    }
 ],
 stock:{
    type:Number,
    default:0,
 },
 collectionId:{
    ref:'Collection',
    
 }

},{timestamps:true});

export default mongoose.model('Product',productSchema);