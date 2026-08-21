import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app=express();
await connectDB();
app.use(cors({
  origin: [
    "https://quick-blog-vert-one.vercel.app",
    "http://localhost:5173"
  ],
  credentials: true
}));
app.use(express.json());
const PORT=process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Server is ready");
})
app.use("/api/admin",adminRouter);
app.use("/api/blog",blogRouter);
app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`);
})
export default app;