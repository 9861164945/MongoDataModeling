import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    content:{type:String,unique:true ,required:true},
    isComplete:{type:Boolean},
    createdBy:{
       type: mongoose.Schema.ObjectId,
       ref:"User"
    }
},{timestamps:true});
export const Todo=mongoose.model("Todo",todoSchema);