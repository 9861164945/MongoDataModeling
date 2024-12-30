import mongoose from "mongoose";
const connectDb=async()=>{
    try{
        await mongoose.connect(`mongodb://localhost:27017/TodoTest1`);
        console.log("Connected to DataBase");
    }
    catch(error)
    {
        console.log(`Error Connecting to MongoDb`,error);
        process.exit(1);
    }
};
export default connectDb;