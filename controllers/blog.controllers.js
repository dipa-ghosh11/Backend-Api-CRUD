import { BLOG } from "../models/blog.models.js";

const createBlog=async(req, res)=>{
    try{
        const { title, createdAt, author, content }=req.body;
        const newBlog = new BLOG({ title, createdAt, author, content });

        await newBlog.save();

        res.status(200).json({
            success: true,
            Message:"Blog created successfully",
            newBlog
        })
    }

    catch(error)
    {
        res.status(500).json({
            success: false,
            Message: "Internal server error",
            error
        })
    }
}


const getBlog=async(req, res)=>{
    try{
        const blogs=await BLOG.find();
        if(!blogs.length)
        {
            res.status(400).json({
                status:false,
                Message:"Blog not found"
            })
        }
        res.status(200).json({
            status: true,
            blogs
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            Message: "Internal server error",
            error
        })
    }
}

// const updateBlog=async(req, res)=>{

// }
export {createBlog, getBlog}