import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please provide a valid user name'],
            trim:true,
            maxLength:[120,'collection name should not be more than 120 charaters'],
        }
    },
    {
        timestamps:true
    }
)

export default mongoose.model('Collection',collectionSchema);