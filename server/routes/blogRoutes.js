import express from "express";
import { addComment, blogComments, blogController,deleteBlog,generateContent,getBlogById,listAllBlogs, togglePublish } from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const blogRouter=express.Router();
blogRouter.post("/addBlog",upload.single("image"),auth,blogController);
blogRouter.get("/all",listAllBlogs);
blogRouter.get("/:id",getBlogById);
blogRouter.post("/delete",auth, deleteBlog);
blogRouter.post("/toggle-publish",auth, togglePublish);
blogRouter.post("/addComment",addComment);
blogRouter.post("/comments",blogComments);
blogRouter.post("/generate",generateContent);
export default blogRouter;