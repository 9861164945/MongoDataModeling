import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
},
mobile:{
    type:Number,
    default:0,
    require:true,
    unique:true,
},
password:{
    type:String,
    required:true,
},
address:{ type:String,required:true

},
},{timestamps:true});
export const User=mongoose.model("User",userSchema);