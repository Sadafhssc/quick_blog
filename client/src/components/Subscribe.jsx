import React from "react";

const Subscribe = () => {
  return (
    <section className="container text-center py-5 my-5">

      {/* Heading */}
      <h1
        className="fw-bold mb-3"
        style={{ fontSize: "2.5rem", color: "#000" }}
      >
        Never Miss a Blog!
      </h1>

      {/* Paragraph */}
      <p
        className="text-secondary mx-auto mb-5"
        style={{
          maxWidth: "700px",
          fontSize: "1.2rem",
        }}
      >
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      {/* Subscribe Form */}
      <div
        className="input-group mx-auto shadow-sm"
        style={{ maxWidth: "750px" }}
      >
        <input
          type="email"
          className="form-control py-3"
          placeholder="Enter your email id"
        />

        <button
          className="btn px-5 text-white"
          style={{ backgroundColor: "#5044E5" }}
        >
          Subscribe
        </button>
      </div>

    </section>
  );
};

export default Subscribe;