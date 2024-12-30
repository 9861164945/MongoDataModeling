import mongoose from "mongoose";
const orderItem=new mongoose.Schema({prod_Id:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
    qty:{type:number}},{timestamps:true});
const orderSchema=new mongoose.Schema({
    order_price:{type:Number,required:true,default:0},
    order_By:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    orderItem:[orderItem],
    status:{ type:Boolean,enum:("Pending","Cancel","succcessfull"),default:"Pending"},


},{timestamps:true});
export const Order=mongoose.model("Order",orderSchema);