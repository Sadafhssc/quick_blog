import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";
import axios from "axios";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();
  const [blog,setBlog]=useState([]);
  const fetchBlogDetails=async()=>{
    try {
      const {data}=await axios.get(`/api/blog/${id}`);
      data.success?setBlog(data.blog):toast.error(data.message);
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (!blog) {
    return (
      <div className="container text-center py-5">
        <h2>Blog Not Found</h2>
      </div>
    );
  }
useEffect(()=>{
    fetchBlogDetails();
},[])
  return (
    <>
              <section
      className="text-center py-5"
      style={{
        background:
          "radial-gradient(circle at 30% 35%, rgba(255,220,230,.45), transparent 35%), radial-gradient(circle at 70% 30%, rgba(195,230,255,.45), transparent 35%)",
      }}
    >
      <div className="container">
     
      <p
          className=" mx-auto mb-2 mt-5"
          style={{
            maxWidth: "720px",
            fontSize: "1rem",
            color:"#5044E5",
            fontWeight:"500"
          }}
        >
          Published on May 28th 2025
        </p>
    
                {/* Heading */}
        <h1
          className="fw-bold lh-1 mb-4"
          style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", color: " #374253" }}
        >
        {blog.title}
        </h1>
    
        {/* Paragraph */}
        <p
          className="text-secondary mx-auto mb-3"
          style={{
            maxWidth: "720px",
            fontSize: "1rem",
          }}
        >
          {blog.subTitle}
        </p>
    
      {/* AI Badge */}
        <div
          className="d-inline-flex align-items-center gap-2 border border-secondary rounded-pill px-4 py-2 mb-4"
          style={{
            color: "#5044E5",
           backgroundColor:" #E5E7EB",
           fontWeight:"500"
          }}
        >
          <span>Michael Brown</span>
        </div>
      </div>
    </section>
    <div className="container py-5">

  <div className="text-center mb-5">
    <img
      src={blog.image}
      alt={blog.title}
      className="img-fluid rounded-4"
      style={{
        maxWidth: "950px",
        width: "100%",
        objectFit: "cover",
      }}
    />
  </div>

  <div
    className="blog-content col-lg-8 col-md-8 mx-auto text-dark text-center"
    style={{
        lineHeight: "1.8",
        fontSize: "1.1rem",
        maxWidth: "800px",
    }}
    dangerouslySetInnerHTML={{__html: blog.description}}
/>
</div>
</>
  );
};

export default Blog;