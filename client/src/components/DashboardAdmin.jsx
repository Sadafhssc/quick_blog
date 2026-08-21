import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast';

const DashboardAdmin = () => {
  const [blogs,setBlogs]=useState([]);
  const {axios}=useAppContext();

  const fetchDashboardData=async()=>{
    try {
      const {data}=await axios.get('/api/admin/dashboard')
      if(data.success){
        setBlogs(data.dashboard_data.recentBlogs || []);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const togglePublish=async(id)=>{
    try {
      const {data}=await axios.post('/api/blog/toggle-publish',{id});
      if(data.success){
        toast.success(data.message);
        setBlogs(prevBlogs =>
          prevBlogs.map(blog =>
            blog._id === id
              ? { ...blog, isPublished: !blog.isPublished }
              : blog
          )
        );
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const deleteBlog=async(id)=>{
    try {
      const {data}=await axios.post('/api/blog/delete',{id});
      if(data.success){
        toast.success(data.message);
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchDashboardData();
  },[])

  return (
    <div
      className="flex-grow-1"
      style={{
        background: "#F6F9FC",
        minHeight: "100vh",
        padding: "22px 16px",
        minWidth: 0,
      }}
    >
      {/* Latest Blogs */}

      <div className="d-flex align-items-center mt-1 mb-3 text-secondary">
        <img
          src={assets.dashboard_icon_4}
          alt=""
          width="24"
          className="me-3"
        />

        <h5
          className="fw-medium mb-0"
          style={{
            color: "#2D3748",
          }}
        >
          Latest Blogs
        </h5>
      </div>

      {/* Table / Card container */}

      <div
        className="bg-white"
        style={{
          borderRadius: "12px",
          border: "1px solid #E7EAF3",
          overflow: "hidden",
        }}
      >

        {/* Desktop / tablet table (md and up) */}
        <div className="table-responsive d-none d-md-block">
          <table className="table mb-0 align-middle text-secondary">

            <thead>
              <tr
                style={{
                  height: "64px",
                  color: "#374151",
                }}
              >
                <th className="ps-4">#</th>
                <th>BLOG TITLE</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>

              {Array.isArray(blogs) && blogs.length > 0 ? (
                blogs.map((blog,index) => (
                  <tr key={blog._id} style={{ height: "70px" }}>
                    <td className="ps-4 fw-semibold text-dark">{index+1}</td>

                    <td className="text-secondary">
                      {blog.title.slice(0,70)}
                    </td>

                    <td className="text-secondary">
                      {blog.createdAt ? new Date(blog.createdAt).toDateString() : "-"}
                    </td>

                    <td>
                      <span
                        style={{
                          color: blog.isPublished ? "#00B74A" : "#F59E0B",
                          fontWeight: "500",
                        }}
                      >
                        {blog.isPublished ? "Published" : "Unpublished"}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm"
                          style={{
                            border: "1px solid #BFC5D2",
                            background: "#fff",
                            color: "#374151",
                            padding: "7px 16px",
                          }}
                          onClick={()=>togglePublish(blog._id)}
                        >
                          {blog.isPublished ? "Unpublish" : "Publish"}
                        </button>

                        <img
                          src={assets.cross_icon}
                          alt="Delete"
                          width="30"
                          style={{ cursor: "pointer" }}
                          onClick={()=>deleteBlog(blog._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-secondary py-4">
                    No blogs found
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Mobile card list (below md) */}
        <div className="d-block d-md-none">

          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog,index) => (
              <div
                key={blog._id}
                className="p-3"
                style={{ borderBottom: "1px solid #E7EAF3" }}
              >
                <div className="d-flex justify-content-between align-items-start mb-2 gap-2">
                  <span
                    className="fw-semibold text-dark"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {index+1}. {blog.title.slice(0,60)}
                  </span>

                  <span
                    style={{
                      color: blog.isPublished ? "#00B74A" : "#F59E0B",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {blog.isPublished ? "Published" : "Unpublished"}
                  </span>
                </div>

                <div className="text-secondary mb-2" style={{ fontSize: "0.8rem" }}>
                  {blog.createdAt ? new Date(blog.createdAt).toDateString() : "-"}
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm flex-grow-1"
                    style={{
                      border: "1px solid #BFC5D2",
                      background: "#fff",
                      color: "#374151",
                      fontSize: "0.8rem",
                    }}
                    onClick={()=>togglePublish(blog._id)}
                  >
                    {blog.isPublished ? "Unpublish" : "Publish"}
                  </button>

                  <img
                    src={assets.cross_icon}
                    alt="Delete"
                    width="26"
                    style={{ cursor: "pointer" }}
                    onClick={()=>deleteBlog(blog._id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-secondary py-4">
              No blogs found
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default DashboardAdmin