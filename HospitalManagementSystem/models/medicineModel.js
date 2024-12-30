import mongoose from "mongoose";
const medicineSchema=new mongoose.Schema({
    medicines:{ type:String,required:true,unique:true},
    medicine_category:{
        type:String,required:true,unique:true,uppercase:true,
    },
    expiry_date:{ type:Date,required:true,unique:true},
    isAvaliable:{
        type:Boolean,
        default:true
    },

},{timestamps:true});
export const Medicine=mongoose.model("Medicine",medicineSchema);