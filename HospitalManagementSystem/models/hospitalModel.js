import mongoose from "mongoose";
const hospitalSchema=new mongoose.Schema({

    Hospitalname:{
        type:String,
        required:true,
        unique:true,
        uppercase:true
    },
    Address_lane1:{
        type:String,
        required:true,
        lowercase:true
    },
    Address_lane2:{
        type:String
    },
    city:{type:String,required:trur},
    pin:{type:Number,required:true},
    specialized:{type:String,enum:["Cancer","Orthopedic","Neurology","Nephrology","ENT"]},

},{timestamps:true});
export const Hospital=mongoose.model("Hospital",hospitalSchema);