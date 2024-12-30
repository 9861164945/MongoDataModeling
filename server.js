import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConnection.js';
const app=express();
const port=process.env.PORT||3000;
dotenv.config();
connectDB();
app.get('/',(req,res)=>{
    res.send("Hello My server:");
});
app.get('/search',(req,res)=>{
    res.send("Hello Server This is my Second Route:")
})
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})
app.get('/test',(req,res)=>{
   const data=
   [
    {id:102,name:'Sambit',role:'developer'},{id:1033,name:'sonu',role:'testes'},
    {id:1004,name:'devin',role:'Softwaredeveloper'},
    {id:1002,name:'smith',role:'Programmer'}] 
res.send(data);
});
app.get('/',(req,res)=>{
    const readData=[
         
    ]
})
