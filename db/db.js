import colors from 'colors'
import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect("mongodb://0.0.0.0:27017/book")
        console.log(`Connected to the Database`.bgGreen)

        
    } catch (error) {
        console.log(`Error in MongoDb ${error}`.bgRed.white)
        
    }
}