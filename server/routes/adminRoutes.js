import express from "express";
import {adminController, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboardData} from "../controllers/adminController.js";

const adminRouter=express.Router();
adminRouter.post("/login", adminController);
adminRouter.get("/blogs", getAllBlogsAdmin);
adminRouter.get("/comments", getAllComments);
adminRouter.get("/dashboard", getDashboardData);
adminRouter.post("/delete-comment", deleteCommentById);
adminRouter.post("/approve-comment", approveCommentById);
export default adminRouter;