import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddCommentList = () => {
    const [comments,setComments]=useState([]);
    // FIX: removed unused `approved` state — each comment's own
    // `isApproved` field is the source of truth, not a shared boolean
    const [filter, setFilter] = useState("approved");

    const getCommentData=async()=>{
      try {
        const {data}=await axios.get('/api/admin/comments');
        if(data.success){
          setComments(data.comments);
        }else{
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

    // FIX: added approve handler, wired to backend's approveCommentById
    const approveComment=async(id)=>{
      try {
        const {data}=await axios.post('/api/admin/approve-comment',{id});
        if(data.success){
          toast.success(data.message);
          // update just this comment locally instead of refetching everything
          setComments(prev =>
            prev.map(item =>
              item._id === id ? { ...item, isApproved: true } : item
            )
          );
        }else{
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

    // FIX: added delete handler, wired to backend's deleteCommentById
    const deleteComment=async(id)=>{
      try {
        const {data}=await axios.post('/api/admin/delete-comment',{id});
        if(data.success){
          toast.success(data.message);
          setComments(prev => prev.filter(item => item._id !== id));
        }else{
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

    // FIX: getCommentData was never actually called — comments never loaded
    useEffect(()=>{
      getCommentData();
    },[])

  return (
    <>
    <div className="container-fluid py-4 px-4 bg-light min-vh-80">
      {/* Heading & Filter Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-semibold m-0">Comments</h5>

       <div className="d-flex gap-3">

  <button
    onClick={() => setFilter("approved")}
    className={`btn rounded-pill px-3 ${
      filter === "approved"
        ? "btn-outline-primary"
        : "btn-outline-secondary"
    }`}
  >
    Approved
  </button>

  <button
    onClick={() => setFilter("unapproved")}
    className={`btn rounded-pill px-3 ${
      filter === "unapproved"
        ? "btn-outline-primary"
        : "btn-outline-secondary"
    }`}
  >
    Not Approved
  </button>

</div>
      </div>

      {/* Comments Card */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-0">

          {/* Table Header */}
          <div className="row fw-bold text-uppercase border-bottom px-4 py-3 small">
            <div className="col-md-7">Blog Title & Comment</div>
            <div className="col-md-2">Date</div>
            <div className="col-md-3">Action</div>
          </div>

          {/* Comments */}
          {comments
            .filter((item)=>filter==="approved"?item.isApproved:!item.isApproved)
            .map((item) => (
            <div
              key={item._id}
              className="row align-items-start px-4 py-4 border-bottom"
            >
              <div className="col-md-7">

                <p className="mb-4">
                  <strong>Blog :</strong> {item.blog.title.slice(0,10)}
                </p>

                <p className="mb-1">
                  <strong>Name :</strong> {item.username}
                </p>

                <p className="mb-0">
                  <strong>Comment :</strong> {item.content}
                </p>
              </div>

              <div className="col-md-2 pt-2">
                {item.createdAt ? item.createdAt.split("T")[0] : "-"}
              </div>

              <div className="col-md-3 d-flex align-items-center gap-3 pt-2">

                {/* FIX: button now reflects THIS comment's isApproved
                    status (not the current filter), only clickable when
                    not yet approved, and actually calls approveComment */}
                <button
                  className={`btn btn-sm rounded-pill px-4 ${
                    item.isApproved
                      ? "btn-outline-success"
                      : "btn-outline-warning"
                  }`}
                  onClick={()=>approveComment(item._id)}
                  disabled={item.isApproved}
                >
                  {item.isApproved ? "Approved" : "Approve"}
                </button>

                {/* FIX: delete icon now actually triggers deletion */}
                <img
                  src={assets.cross_icon}
                  alt=""
                  width="34"
                  style={{ cursor: "pointer", marginLeft:"1.2rem" }}
                  onClick={()=>deleteComment(item._id)}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
    </>
  )
}

export default AddCommentList