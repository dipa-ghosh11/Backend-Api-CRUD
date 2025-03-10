import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now
    }, 
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required: true
    },
    

})

export const BLOG=mongoose.model("BLOG", userSchema);