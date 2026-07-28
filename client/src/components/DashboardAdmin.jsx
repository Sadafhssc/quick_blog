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
        // FIX: update just this blog's isPublished flag in local state
        // instantly, instead of waiting on a full refetch
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
        // FIX: remove the blog from local state instantly instead of refetching
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
        padding: "22px 30px",
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

      {/* Table */}

      <div
        className="bg-white"
        style={{
          borderRadius: "12px",
          border: "1px solid #E7EAF3",
          overflow: "hidden",
        }}
      >
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
                <tr key={blog._id} style={{ height: "70px" }} >
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
                    <button
                      className="btn btn-sm me-3"
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
                      alt=""
                      width="34"
                      style={{ cursor: "pointer" }}
                      onClick={()=>deleteBlog(blog._id)}
                    />
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
    </div>
  )
}

export default DashboardAdmin