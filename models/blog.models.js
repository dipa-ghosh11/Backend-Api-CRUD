import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },
    
    blog:{
        type:String,
        required: true
    },
    

})