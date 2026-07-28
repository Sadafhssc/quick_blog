import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">

            <img
              src={assets.logo}
              alt="logo"
              className="logo"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />

            <button
              className="btn rounded-pill px-5 py-2 d-flex align-items-center text-white"
              style={{ backgroundColor: "#5044E5", borderColor: "#5044E5" }}
              onClick={() => navigate("/")}
            >
              <span className="me-2">Logout</span>
            </button>

          </div>
        </div>
      </header>

      <hr className="m-0 border-secondary-subtle opacity-100" />
    </>
  );
};

export default AdminHeader;