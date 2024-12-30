import mongoose from "mongoose";
const patientSchema=new mongoose.Schema({
    patient_name:{
        type:String,
        required:true,
        lowecase:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    diagnosedWith:{
        type:String,
        required:true,

    }
    ,
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:["A+ve","B+ve","AB+ve","A-ve","B-ve","AB-ve","O+ve","O-ve"],
        required:true

    },
    Gender:{
        type:String,
        enum:["Male","Female","TransGender"],
        required:true,

    },
    admittedIn:{
        type:mongoose.Types.ObjectId,
        refd:"Hospital"
    },
},{timestamps:true});
export const Patient=mongoose.model("Patient",patientSchema);