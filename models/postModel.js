import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    post:{
        type:String,
        unique:true,
        
    },
    postDesc:{
type:String,
required:true
    },
    cretatedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },

},{timestamps:true});
export const post=mongoose.model("post",postSchema);