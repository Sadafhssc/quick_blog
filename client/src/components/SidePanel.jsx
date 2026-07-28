import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SidePanel = () => {
  return (
    <div
      className="bg-white border-end"
      style={{
        width: "260px",
        minHeight: "100vh",
      }}
    >
      <ul className="nav flex-column pt-4">

        {/* Dashboard */}
        <li className="nav-item">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 py-3 px-4 ${
                isActive ? "bg-light border-end border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.list_icon} alt="" width={22} height={22} />
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* Add Blogs */}
        <li className="nav-item">
          <NavLink
            to="/admin/addBlogs"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 py-3 px-4 ${
                isActive ? "bg-light border-end border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.add_icon} alt="" width={22} height={22} />
            <span>Add Blogs</span>
          </NavLink>
        </li>

        {/* Blog Lists */}
        <li className="nav-item">
          <NavLink
            to="/admin/listBlogs"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 py-3 px-4 ${
                isActive ? "bg-light border-end border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.blog_icon} alt="" width={22} height={22} />
            <span>Blog Lists</span>
          </NavLink>
        </li>

        {/* Comments */}
        <li className="nav-item">
          <NavLink
            to="/admin/listComments"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-3 py-3 px-4 ${
                isActive ? "bg-light border-end border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.comment_icon} alt="" width={22} height={22} />
            <span>Comments</span>
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default SidePanel;