import React from "react";
import { useAppContext } from "../context/AppContext";

const BlogCard = ({ category }) => {
    const { blogs, input, navigate } = useAppContext();

    const filteredBlogs = blogs.filter((blog) => {

        const matchesSearch =
            blog.title.toLowerCase().includes(input.toLowerCase()) ||
            blog.category.toLowerCase().includes(input.toLowerCase());

        const matchesCategory =
            category === "All" || 
            blog.category.toLowerCase() === category.toLowerCase();

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container my-5">
            <div className="row g-4">

                {filteredBlogs.map((blog) => (

                    <div className="col-lg-3 col-md-5" key={blog._id}>

                        <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">

                            <img
                                src={blog.image}
                                className="card-img-top"
                                alt={blog.title}
                                style={{
                                    height: "180px",
                                    objectFit: "cover",
                                    cursor:"pointer"
                                }}
                                onClick={() => navigate(`/blog/${blog._id}`)}
                            />

                            <div className="card-body">

                                <span
                                    className="badge rounded-pill px-3 py-2 mb-3"
                                    style={{
                                        background:"#EEF2FF",
                                        color:"#5044E5"
                                    }}
                                >
                                    {blog.category}
                                </span>

                                <h5 className="fw-semibold">
                                    {blog.title}
                                </h5>

                                <p>
                                    {blog.description
                                        .replace(/<[^>]*>/g,"")
                                        .slice(0,80)
                                    }...
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>
        </div>
    );
};

export default BlogCard;
