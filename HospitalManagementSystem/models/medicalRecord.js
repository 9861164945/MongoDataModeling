import mongoose from "mongoose";
const medicalRecordSchema=new mongoose.Schema({
    patientId:{type:mongoose.Schema.Types.ObjectId},
    doctorId:{type:mongoose.Schema.Types.ObjectId},
    medicineId:{type:mongoose.Schema.Types.ObjectId},

},{timestamps:true});
export const Medical=mongoose.model("Medical",medicalRecordSchema);