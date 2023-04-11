import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        maxLength:[50,'Name must be less than 50 characters']
    },
    email:{
        type:String,
        required:[true,"Email is required"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[8,'Password must be at least 8 characters'],
        select:false,
    },
    role:{
        type:String,
        enum:Object.values(AuthRoles),
        default: AuthRoles.USER,
    },
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,
},{timestamp:true});

export default mongoose.model('Use',userSchema);
