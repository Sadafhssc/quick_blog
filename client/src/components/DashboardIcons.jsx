import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const DashboardIcons = () => {
  const [blogCount,setBlogCount]=useState(0);
  const [commentCount,setCommentCount]=useState(0);
  const [draftCount,setDraftCount]=useState(0);
  const {axios}=useAppContext();

  const fetchDashboardData=async()=>{
    try {
      const {data}=await axios.get('/api/admin/dashboard')
      if(data.success){
        // FIX: dashboard data is nested under `dashboard_data`
        const { blogs, comments, drafts } = data.dashboard_data;
        setBlogCount(blogs);
        setCommentCount(comments);
        setDraftCount(drafts);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  // FIX: added empty dependency array — without it this ran on every
  // render, triggering an infinite fetch/re-render loop
  useEffect(()=>{
    fetchDashboardData();
  },[])

  return (
    <div>
        <div
      className="flex-grow-1"
      style={{
        background: "#F6F9FC",
        padding: "22px 30px",
      }}
    >
      <div className="row g-3">

        {/* Blogs */}

        <div className="col-lg-3">
          <div
            className="bg-white d-flex align-items-center p-3"
            style={{
              borderRadius: "10px",
              border: "1px solid #E7EAF3",
              height: "110px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "80px",
                height: "80px",
                background: "#F6F7FB",
                borderRadius: "16px",
              }}
            >
              <img
                src={assets.dashboard_icon_1}
                alt=""
                width="70"
              />
            </div>

            <div className="ms-4">
              <h2
                className="fw-bold mb-1"
                style={{ fontSize: "1.4rem", color: "#2D3748" }}
              >
                {blogCount}
              </h2>

              <p
                className="mb-0"
                style={{
                  color: "#7B8794",
                  fontSize: "1rem",
                }}
              >
                Blogs
              </p>
            </div>
          </div>
        </div>

        {/* Comments */}

        <div className="col-lg-3">
          <div
            className="bg-white d-flex align-items-center p-3"
            style={{
              borderRadius: "10px",
              border: "1px solid #E7EAF3",
              height: "110px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "80px",
                height: "80px",
                background: "#F6F7FB",
                borderRadius: "16px",
              }}
            >
              <img
                src={assets.dashboard_icon_2}
                alt=""
                width="70"
              />
            </div>

            <div className="ms-4">
              <h2
                className="fw-bold mb-1"
                style={{ fontSize: "1.4rem", color: "#2D3748" }}
              >
                {commentCount}
              </h2>

              <p
                className="mb-0"
                style={{
                  color: "#7B8794",
                  fontSize: "1rem",
                }}
              >
                Comments
              </p>
            </div>
          </div>
        </div>

        {/* Drafts */}

        <div className="col-lg-3">
          <div
            className="bg-white d-flex align-items-center p-3"
            style={{
              borderRadius: "10px",
              border: "1px solid #E7EAF3",
              height: "110px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "80px",
                height: "80px",
                background: "#F6F7FB",
                borderRadius: "16px",
              }}
            >
              <img
                src={assets.dashboard_icon_3}
                alt=""
                width="70"
              />
            </div>

            <div className="ms-4">
              <h2
                className="fw-bold mb-1"
                style={{ fontSize: "1.4rem", color: "#2D3748" }}
              >
                {draftCount}
              </h2>
              <p
                className="mb-0"
                style={{
                  color: "#7B8794",
                  fontSize: "1rem",
                }}
              >
                Drafts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default DashboardIcons