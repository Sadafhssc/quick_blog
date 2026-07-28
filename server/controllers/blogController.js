import fs from "fs";
import imageKit from "../config/imageKit.js";
import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";
import main from "../config/gemini.js";

const blogController=async(req,res)=>{
    try {
         const {title,subTitle,description,category,isPublished}=JSON.parse(req.body.blog);
  const imageFile=req.file;
  if(!title || !description || !category || !imageFile){
    return res.json({success:false,message:"Empty fields are not allowed"})
  }
  const fileBuffer=fs.readFileSync(imageFile.path);
  const response = await imageKit.upload({
  file: fileBuffer,
  fileName: imageFile.originalname,
  folder:"/blogs"
});
const transformedUrl = imageKit.url({
  path:response.filePath,
  transformation: [
    {
      width: 1280,
      quality: 'auto',
      format: 'webp',
    },
  ],
});
const image=transformedUrl;
 await Blog.create({title,subTitle,description,category,isPublished,image});
 return res.json({success:true,message:"Blog uploaded successfully"});
    } catch (error) {
        return res.json({success:false,message:error.message});
    }
}
const listAllBlogs=async(req,res)=>{
  try {
    const blogs=await Blog.find({isPublished:true});
    return res.json({success:true,blogs});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}
const getBlogById=async(req,res)=>{
  try {
    const {id}=req.params;
    const blog=await Blog.findById(id);
    return res.json({success:true,blog});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}
const deleteBlog=async(req,res)=>{
  try {
    const {id}=req.body;
    await Blog.findByIdAndDelete(id);
    await Comment.deleteMany({blog:id}); 
    return res.json({success:true,message:"Blog deleted successfully"});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}
const togglePublish=async(req,res)=>{
  try {
    const {id}=req.body;
    const blog =await Blog.findById(id);
    blog.isPublished=!blog.isPublished;
    await blog.save();
    return res.json({success:true,message:"Blog status updated successfully"});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}
const blogComments=async(req,res)=>{
  try {
    const {blogId}=req.body;
    const comments =await Comment.find({blog:blogId,isApproved:true}).sort({createdAt:-1});
    return res.json({success:true,comments});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}
const addComment=async(req,res)=>{
  try {
    const {blog,username,content}=req.body;
    await Comment.create({blog,username,content});
    return res.json({success:true,message:"Comment added for review"});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}
const generateContent=async(req,res)=>{
  try {
    const {prompt}=req.body;
    const content = await main(`${prompt} Generate a blog content for this blog title in simple text format`);
    return res.json({success:true,content});
  } catch (error) {
    return res.json({success:false,message:error.message});
  }
}

export {blogController,listAllBlogs,getBlogById,deleteBlog,togglePublish,blogComments,addComment ,generateContent};