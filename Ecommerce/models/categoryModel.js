import mongoose, { Types } from "mongoose";
const categorySchema=new mongoose.Schema({
    category_Name:{type:String,required:true},
},{timestamps:true}
)
export const  Category= mongoose.model("Category",categorySchema);