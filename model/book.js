import mongoose from "mongoose"

const BookSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
})

export default mongoose.model("Book", BookSchema)