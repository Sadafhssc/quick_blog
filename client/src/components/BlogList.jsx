import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { blogCategories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const {blogs}=useAppContext();
  return (
    <>
      <header className="d-flex justify-content-center">
        <ul className="nav gap-1.5">

          {blogCategories.map((category) => (
            <li className="nav-item" key={category}>
              <button
                onClick={() => setMenu(category)}
                className="btn rounded-pill px-4 py-2"
                style={{
                  backgroundColor:
                    menu === category ? "#5044E5" : "white",
                  color:
                    menu === category ? "#FFFFFF" : "#374253",
                  border: "none",
                  fontWeight: "400",
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