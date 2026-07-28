import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const {navigate,token}=useAppContext();
  return (
    <header className=" py-4"  style={{
    background:
      "radial-gradient(circle at 30% 35%, rgba(255,220,230,.45), transparent 35%), radial-gradient(circle at 70% 30%, rgba(195,230,255,.45), transparent 35%)",
  }}>
      <div className="container">

        <div className="d-flex justify-content-between align-items-center cursor-pointer">

          <img
            src={assets.logo}
            alt="logo"
            className="logo"
            onClick={()=>navigate("/")}
          />
          <button
            className="btn rounded-pill px-5 py-2 d-flex align-items-center text-white"
            style={{ backgroundColor: "#5044E5", borderColor: "#5044E5" }}
             onClick={()=>navigate("/login")}
          >
            <span className="me-2">{token?"Dashboard":"Login"}</span>
            <img src={assets.arrow} alt="arrow" width="14" />
          </button>

        </div>

      </div>
    </header>
  )
}

export default Navbar
