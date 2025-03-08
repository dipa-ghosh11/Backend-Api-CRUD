import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/database.js";


const app=express();
dotenv.config({path:"./.env"});

dbConnection();
app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on ${process.env.PORT}`)
});