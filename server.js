import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/database.js";
import router from "./routes/blog.routes.js";
import cors from "cors";


const app=express();
dotenv.config({path:"./.env"});
app.use(express.json());
app.use(cors());

app.use('/api', router);


dbConnection();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on ${process.env.PORT}`)
});