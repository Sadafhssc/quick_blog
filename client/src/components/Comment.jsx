import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Comment = () => {
    const {id}=useParams();
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  // Fetch Comments
  const fetchComments = async () => {

    try {
      const { data } = await axios.post("/api/blog/comments", {
        blogId: id,
      });

      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Add Comment
  const postComment = async () => {
    if (!username || !content) return;

    try {
      const { data } = await axios.post("/api/blog/addComment", {
        blog:id,
        username: username,
        content,
      });

      if (data.success) {
        toast.success("Comment added for review");
        setUsername("");
        setContent("");

        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="container mt-5">
      {/* Comments List */}
      <div className="mb-5 col-lg-8 mx-auto">
        <p className="fs-5 fw-bold">
          Comments ({comments.length})
        </p>

        <div className="d-flex flex-column gap-4">
          {comments.map((item) => (
            <div
              key={item._id}
              className="position-relative border rounded-3 p-3 bg-light"
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <img
                  src={assets.user_icon}
                  alt=""
                  width={28}
                  height={28}
                />

                <p className="fw-semibold mb-0">
                  {item.username}
                </p>
              </div>

              <p
                className="text-secondary"
                style={{ marginLeft: "36px" }}
              >
                {item.content}
              </p>

              <small
                className="position-absolute text-secondary"
                style={{
                  right: "15px",
                  bottom: "10px",
                }}
              >
                {Moment(item.createdAt).fromNow()}
              </small>
            </div>
          ))}
        </div>
      </div>

      {/* Add Comment */}
      <div className="col-lg-8 mx-auto">
        <h3 className="fw-bold mb-4">
          Add your comment
        </h3>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <textarea
            rows="6"
            className="form-control"
            placeholder="Write your comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          className="btn"
          onClick={postComment}
          style={{backgroundColor:"#5044E5",
          color: "white"
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comment;
