import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URI, {dbName:"Blog-Api", family:4})
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((error)=>{
        console.log("Some error is occurred", error);
    })
}