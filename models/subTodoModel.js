import mongoose from "mongoose";
const subTodoSchema=new mongoose.Schema({
    title:{type:String,unique:true,require:true},
    completed:{type:Boolean,default:false},
    cretedBy:{type:mongoose.Schema.ObjectId,ref:"User"}
},{timestamps:true});
 export const subTodo=mongoose.model("subTodo",subTodoSchema);