import express from "express";
import dotenv  from "dotenv";
const app=express();
const port=process.env.PORT||3000;
dotenv.config();
app.get('/',(req,res)=>{
    res.send(`Hey this is my Ecommerce index.js`);
})
app.listen(port,()=>{
    console.log(`App is listening at Port:${port}`);
})