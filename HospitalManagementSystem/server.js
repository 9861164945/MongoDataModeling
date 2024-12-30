import express from "express";
import dotenv from "dotenv";
const app=express();
dotenv.config();
const port=process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.send(`Hey This is the Hospital management System Software Api`);
});

app.listen(port,()=>{
    console.log(`Server is listening  at port:${port}`);
})