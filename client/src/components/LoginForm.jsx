import axios from "axios";
import React,{useState} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const LoginForm = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
   const {navigate,setToken}=useAppContext();
  const handleSubmit =async(e)=>{
       e.preventDefault();
  try {
    const {data}=await axios.post("/api/admin/login",{email,password});
    if(data.success){
      setToken(data.token);
      await localStorage.setItem("token",data.token);
      axios.defaults.headers.common["Authorization"]=data.token;
      navigate("/admin");
    }else{
      toast.error(data.message);
    }
  } catch (error) {
     toast.error(error.message);
  }
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",
        marginTop:"4rem",
        background: "#fff",
      }}
    >
      <form
        style={{
          width: "430px",
          padding: "45px 40px",
          border: "1px solid #CFCBFF",
          borderRadius: "14px",
          boxShadow: "0 15px 35px rgba(91,76,244,0.15)",
          background: "#fff",
        }}
        onSubmit={handleSubmit}
      >
        {/* Heading */}

        <h1
          className="text-center fw-bold mb-2"
          style={{ fontSize: "2rem" }}
        >
          <span style={{ color: "#5B4CF4" }}>Admin</span>{" "}
          <span style={{ color: "#000" }}>Login</span>
        </h1>

        <p
          className="text-center text-dark mb-5"
          style={{ fontSize: "1.1rem" }}
        >
          Enter your credentials to access the admin panel
        </p>

        {/* Email */}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="form-label"
            style={{
              fontSize: "1rem",
              color: "#333",
            }}
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="admin@example.com"
            className="form-control rounded-2 px-2 border-secondary"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            style={{
              borderBottom: "2px solid #D5D7E0",
              boxShadow: "none",
              fontSize: "1rem",
              paddingBottom: "10px",
            }}
          />
        </div>

        {/* Password */}

        <div className="mb-4">
          <label
            htmlFor="password"
            className="form-label"
            style={{
              fontSize: "1rem",
              color: "#333",
            }}
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="••••••••••"
            className="form-control rounded-2 px-2 border-secondary"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            style={{
              borderBottom: "2px solid #D5D7E0",
              boxShadow: "none",
              fontSize: "1rem",
              paddingBottom: "10px",
            }}
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="btn w-100 text-white fw-semibold"
          style={{
            background: "linear-gradient(90deg,#5B4CF4,#4F46E5)",
            padding: "10px",
            fontSize: "1.1rem",
            borderRadius: "8px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;