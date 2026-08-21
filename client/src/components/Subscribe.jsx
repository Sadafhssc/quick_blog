import React from "react";

const Subscribe = () => {
  return (
    <section className="container text-center py-5 my-5 px-3">

      {/* Heading */}
      <h1
        className="fw-bold mb-3"
        style={{ fontSize: "clamp(1.6rem, 6vw, 2.5rem)", color: "#000" }}
      >
        Never Miss a Blog!
      </h1>

      {/* Paragraph */}
      <p
        className="text-secondary mx-auto mb-5"
        style={{
          maxWidth: "700px",
          fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
        }}
      >
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      {/* Subscribe Form */}
      <div
        className="input-group mx-auto shadow-sm flex-nowrap"
        style={{ maxWidth: "750px" }}
      >
        <input
          type="email"
          className="form-control py-2 py-md-3"
          placeholder="Enter your email id"
          style={{ fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}
        />

        <button
          className="btn px-3 px-sm-4 px-md-5 text-white"
          style={{
            backgroundColor: "#5044E5",
            fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
            whiteSpace: "nowrap",
          }}
        >
          Subscribe
        </button>
      </div>

    </section>
  );
};

export default Subscribe;