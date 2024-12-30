import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    prod_name:{type:String,required:true,unique:true,uppercase:true},
    prod_desc:{type:String,required:true,unique:true,lowercae:true},
    prod_Img:{type:String,required:true},
    price:{
        indprice:{type:Number,default:0},
        Usdtprice:{type:Number,default:0},
    },
    Rating:{
        type:String,
        default:null,
    },
    Stock:{

        type:Number,
        required:true,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true});
export const Product=mongoose.model("Product",productSchema);