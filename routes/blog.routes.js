import { createBlog} from "../controllers/blog.controllers.js";
import { getBlog } from "../controllers/blog.controllers.js";
import express from "express";

const router=express.Router();

router.post('/create', createBlog);
router.post('/get', getBlog);

export default router;