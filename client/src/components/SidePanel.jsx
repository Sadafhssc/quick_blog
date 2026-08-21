import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SidePanel = () => {
  return (
    <div
      className="bg-white border-end"
      style={{
        minHeight: "auto",
      }}
    >
      <ul
        className="nav flex-row flex-md-column justify-content-around justify-content-md-start pt-2 pt-md-4 border-bottom border-bottom-md-0"
      >

        {/* Dashboard */}
        <li className="nav-item">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `nav-link d-flex flex-column flex-md-row align-items-center gap-md-3 py-2 py-md-3 px-2 px-md-4 ${
                isActive ? "bg-light border-bottom border-md-bottom-0 border-end-md border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.list_icon} alt="" width={22} height={22} />
            <span className="d-none d-md-inline">Dashboard</span>
          </NavLink>
        </li>

        {/* Add Blogs */}
        <li className="nav-item">
          <NavLink
            to="/admin/addBlogs"
            className={({ isActive }) =>
              `nav-link d-flex flex-column flex-md-row align-items-center gap-md-3 py-2 py-md-3 px-2 px-md-4 ${
                isActive ? "bg-light border-bottom border-md-bottom-0 border-end-md border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.add_icon} alt="" width={22} height={22} />
            <span className="d-none d-md-inline">Add Blogs</span>
          </NavLink>
        </li>

        {/* Blog Lists */}
        <li className="nav-item">
          <NavLink
            to="/admin/listBlogs"
            className={({ isActive }) =>
              `nav-link d-flex flex-column flex-md-row align-items-center gap-md-3 py-2 py-md-3 px-2 px-md-4 ${
                isActive ? "bg-light border-bottom border-md-bottom-0 border-end-md border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.blog_icon} alt="" width={22} height={22} />
            <span className="d-none d-md-inline">Blog Lists</span>
          </NavLink>
        </li>

        {/* Comments */}
        <li className="nav-item">
          <NavLink
            to="/admin/listComments"
            className={({ isActive }) =>
              `nav-link d-flex flex-column flex-md-row align-items-center gap-md-3 py-2 py-md-3 px-2 px-md-4 ${
                isActive ? "bg-light border-bottom border-md-bottom-0 border-end-md border-4 border-primary fw-semibold" : "text-dark"
              }`
            }
          >
            <img src={assets.comment_icon} alt="" width={22} height={22} />
            <span className="d-none d-md-inline">Comments</span>
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default SidePanel;