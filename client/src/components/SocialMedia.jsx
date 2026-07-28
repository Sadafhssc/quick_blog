import React from "react";
import { assets } from "../assets/assets";

const SocialMedia = () => {
  return (
    <div className="container my-5">
      <div className="d-flex flex-column align-items-center">

        <p className="fw-bold fs-5 mb-4">
          Share this article on social media
        </p>

        <div className="d-flex justify-content-center gap-3">
          <img
            src={assets.facebook_icon}
            alt="Facebook"
            width="50"
            className="img-fluid"
            style={{ cursor: "pointer" }}
          />

          <img
            src={assets.twitter_icon}
            alt="Twitter"
            width="50"
            className="img-fluid"
            style={{ cursor: "pointer" }}
          />

          <img
            src={assets.googleplus_icon}
            alt="Google Plus"
            width="50"
            className="img-fluid"
            style={{ cursor: "pointer" }}
          />
        </div>

      </div>
    </div>
  );
};

export default SocialMedia;