import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { blogCategories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const {blogs}=useAppContext();
  return (
    <>
      <header className="d-flex justify-content-center px-3">
        <ul
          className="nav flex-wrap justify-content-center"
          style={{ maxWidth: "700px", rowGap: "8px", columnGap: "6px" }}
        >

          {blogCategories.map((category) => (
            <li className="nav-item" key={category}>
              <button
                onClick={() => setMenu(category)}
                className="btn rounded-pill px-3 px-md-4 py-1 py-md-2"
                style={{
                  backgroundColor:
                    menu === category ? "#5044E5" : "white",
                  color:
                    menu === category ? "#FFFFFF" : "#374253",
                  border: "none",
                  fontWeight: "400",
                  fontSize: "clamp(0.8rem, 2vw, 1rem)",
                  whiteSpace: "nowrap",
                }}
              >
                {category}
              </button>
            </li>
          ))}

        </ul>
      </header>

      <BlogCard category={menu} />
    </>
  );
};

export default BlogList;