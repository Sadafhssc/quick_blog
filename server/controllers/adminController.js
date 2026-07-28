import express from "express";
import jwt from "jsonwebtoken";
import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";

const adminController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return res.json({ success: true, token });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.json({ success: true, blogs });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("blog")
      .sort({ createdAt: -1 });
    return res.json({ success: true, comments });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
const getDashboardData = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments();
    const comments = await Comment.countDocuments();
    const drafts = await Blog.find({ isPublished: false }).countDocuments();
    const dashboard_data = {
      blogs,
      comments,
      drafts,
      recentBlogs,
    };
    return res.json({ success: true, dashboard_data });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
const deleteCommentById = async (req, res) => {
  try {
    const {id}=req.body;
    await Comment.findByIdAndDelete(id);
    return res.json({ success: true,message:"Comment deleted successfully"});
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
const approveCommentById = async (req, res) => {
  try {
    const {id}=req.body;
    await Comment.findByIdAndUpdate(id,{isApproved:true});
    return res.json({ success: true,message:"Comment approved successfully"});
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
export {adminController,getAllBlogsAdmin,getAllComments,getDashboardData,deleteCommentById,approveCommentById};
