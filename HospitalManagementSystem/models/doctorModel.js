import mongoose  from "mongoose";
const doctorSchema=new  mongoose.Schema({
    name:{type:String,required:true},
    qualification:{type:String,required:true,uppercase:true},
    specializtion:{type:String,required:true,uppercase:true},
    salary:{type:Number,required:true},
    experience:{type:Number,required:true},
     workInHospital:{type:mongoose.Schema.Types.ObjectId,ref:"Hospital"}



},{timestamps:true});
export const Doctor=new mongoose.model("Doctor",doctorSchema);