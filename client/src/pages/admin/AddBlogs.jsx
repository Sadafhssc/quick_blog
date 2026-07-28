import React from "react";
import AddBlogForm from "../../components/AddBlogForm";

const AddBlogs = () => {
  return (
    <div
      className="flex-grow-1"
      style={{
        background: "#F6F9FC",
        minHeight: "100vh",
        padding: "28px 35px",
      }}
    >
      <AddBlogForm />
    </div>
  );
};

export default AddBlogs;