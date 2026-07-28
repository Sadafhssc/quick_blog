import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import Quill from "quill";
import axios from "axios";
import toast from "react-hot-toast";
import { marked } from "marked"; // FIX: `marked` has no default export — must be a named import

const AddBlogForm = () => {
    const [thumbnail,setThumbnail]=useState(false);
    const [title,setTitle]=useState("");
    const [subtitle,setSubtitle]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("Select category");
    const [isPublished,setIsPublished]=useState(false);
    const quillRef=useRef(null);
    const editorRef=useRef(null);
    const [isLoading,setIsLoading]=useState(false);
    const [isAdding,setIsAdding]=useState(false);

    const handleGenerateWithAI=async(e)=>{
      try {
         if(!title) return toast.error("Title is required");
      setIsAdding(true);
      const {data}=await axios.post("/api/blog/generate",{prompt:title});
      if(data.success){
        // FIX: marked's parse function is called via marked.parse() (or marked() directly)
        quillRef.current.root.innerHTML=marked.parse(data.content);
      }else{
        toast.error(data.message)
      }
      } catch (error) {
        toast.error(error.message)
      } finally {
        // FIX: setIsAdding(false) was only called on success, so it stayed
        // stuck on "Generating..." forever if the request failed or errored
        setIsAdding(false);
      }
    }

    const handleSubmit=async(e)=>{
      try {
        e.preventDefault();
        setIsLoading(true);
        const blog={
          title,subtitle,
          description:quillRef.current.root.innerHTML,
          category,isPublished
        }
        const formData=new FormData();
        formData.append("blog",JSON.stringify(blog));
        formData.append("image",thumbnail);
        const {data}=await axios.post("/api/blog/addBlog",formData);
        if(data.success){
          toast.success("Blog uploaded successfully");
          setTitle("");
          setSubtitle("");
          quillRef.current.root.innerHTML="";
          setThumbnail(false);
          setCategory("Select category")
        }else{
           toast.error(data.message);
        }
      } catch (error) {
         toast.error(error.message);
      }finally{
        setIsLoading(false);
      }
    }

  useEffect(()=>{
     if(!quillRef.current && editorRef.current){
      quillRef.current=new Quill(editorRef.current,{theme:"snow"});
     }
  },[])

  return (
    <div
      className="bg-white"
      style={{
        maxWidth: "770px",
        borderRadius: "7px",
        border: "1px solid #E7EAF3",
        padding: "40px 50px",
      }}
    >
      {/* Upload Thumbnail */}

      <div className="mb-4">
        <label
          className="d-block mb-3"
          style={{
            fontSize: "1.1rem",
            color: "#374151",
            fontWeight: "500",
          }}
        >
          Upload thumbnail
        </label>

        <label
          htmlFor="image"
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            width: "130px",
            height: "67px",
            border: "1px dashed #C9CED6",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <img
            src={thumbnail ? URL.createObjectURL(thumbnail) : assets.upload_area}
            alt=""
            width="130"
            className="mb-2"
          />
        </label>

        <input
          type="file"
          hidden
          id="image"
          accept="image/*"
          onChange={(e)=>setThumbnail(e.target.files[0])}
        />
      </div>

      {/* Blog Title */}

      <div className="mb-4">
        <label
          className="form-label fw-medium"
          style={{
            fontSize: "1.1rem",
            color: "#374151",
          }}
        >
          Blog title
        </label>

        <input
          type="text"
          className="form-control shadow-none text-secondary"
          placeholder="Type here"
          style={{
            height: "47px",
            borderRadius: "8px",
            border: "1px solid #D8DEE8",
            fontSize: "1rem",
          }}
          onChange={(e)=>setTitle(e.target.value)}
           value={title}
        />
      </div>

      {/* Subtitle */}

      <div className="mb-4">
        <label
          className="form-label fw-medium"
          style={{
            fontSize: "1.1rem",
            color: "#374151",
          }}
        >
          Sub title
        </label>

        <input
          type="text"
          className="form-control shadow-none text-secondary"
          placeholder="Type here"
          style={{
            height: "47px",
            borderRadius: "8px",
            border: "1px solid #D8DEE8",
            fontSize: "1rem",
          }}
           onChange={(e)=>setSubtitle(e.target.value)}
           value={subtitle}
        />
      </div>

     {/* Description */}

<div className="mb-4">
  <label
    className="form-label fw-medium"
    style={{
      fontSize: "1.1rem",
      color: "#374151",
    }}
  >
    Blog Description
  </label>

  <div style={{ position: "relative" }}>
    <div
      ref={editorRef}
      style={{
        height: "300px",
        borderRadius: "8px",
      }}
    ></div>

    <button
      type="button"
      onClick={handleGenerateWithAI}
      disabled={isAdding}
      className="btn text-white"
      style={{
        position: "absolute",
        bottom: "12px",
        right: "12px",
        backgroundColor: "#374151",
        border: "none",
        borderRadius: "6px",
        fontSize: "0.9rem",
        padding: "8px 18px",
        zIndex: 5,
      }}
    >
      {isAdding ? "Generating..." : "Generate with AI"}
    </button>
  </div>
</div>

      {/* Category */}

      <div className="mb-4">
        <label
          className="form-label d-block fw-medium"
          style={{
            fontSize: "1.1rem",
            color: "#374151",
          }}
        >
          Blog category
        </label>

        <select
          className="form-select shadow-none"
          style={{
            width: "230px",
            height: "47px",
            borderRadius: "8px",
            border: "1px solid #D8DEE8",
            fontSize: "1.1rem",
          }}
           onChange={(e)=>setCategory(e.target.value)}
           value={category}
        >
          <option>Select category</option>
          <option>Technology</option>
          <option>Business</option>
          <option>Lifestyle</option>
            <option>Finance</option>
            <option>Startup</option>
        </select>
      </div>

      {/* Publish */}

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="publish"
          style={{
            width: "22px",
            height: "22px",
          }}
           onChange={(e)=>setIsPublished(e.target.checked)}
           checked={isPublished}
        />

        <label
          htmlFor="publish"
          className="form-check-label ms-2 fw-medium"
          style={{
            fontSize: "1.1rem",
            color: "#374151",
          }}
        >
          Publish Now
        </label>
      </div>

      {/* Button */}

      <button
        className="btn text-white"
        style={{
          width: "180px",
          height: "44px",
          background: "#5044E5",
          borderRadius: "4px",
          fontSize: "1rem",
          fontWeight: "500",
        }}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading?"Adding...":"Add Blog"}
      </button>
    </div>
  );
};

export default AddBlogForm;