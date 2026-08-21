import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className="mt-5 pt-5"
      style={{ backgroundColor: "#F9F9FF" }}
    >
      <div className="container">

        <div className="row gy-5 gy-lg-6 text-center text-lg-start">

          {/* Logo */}
          <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-start">

            <img
              src={assets.logo}
              alt="logo"
              className="mb-4"
              style={{ width: "160px", maxWidth: "60%" }}
            />

            <p
              className="mb-0"
              style={{
                color: "#6B7280",
                maxWidth: "450px",
                lineHeight: "1.8",
                fontSize: "1rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Rerum unde quaerat eveniet cumque accusamus atque qui
              error quo enim fugiat?
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2 d-flex flex-column align-items-center align-items-lg-start">

            <h4
              className="fw-bold mb-3 mb-lg-4"
              style={{ color: "#111827", fontSize: "1rem" }}
            >
              Quick Links
            </h4>

            <ul className="nav flex-column gap-2 align-items-center align-items-lg-start">

              <li><a href="#" className="nav-link p-0 text-secondary">Home</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Best Sellers</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Offers & Deals</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Contact Us</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">FAQs</a></li>

            </ul>

          </div>

          {/* Help */}
          <div className="col-6 col-lg-2 d-flex flex-column align-items-center align-items-lg-start">

            <h4
              className="fw-bold mb-3 mb-lg-4"
              style={{ color: "#111827", fontSize: "1rem" }}
            >
              Need Help?
            </h4>

            <ul className="nav flex-column gap-2 align-items-center align-items-lg-start">

              <li><a href="#" className="nav-link p-0 text-secondary">Delivery Information</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Return & Refund Policy</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Payment Methods</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Track your Order</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Contact Us</a></li>

            </ul>

          </div>

          {/* Follow */}
          <div className="col-6 col-lg-2 d-flex flex-column align-items-center align-items-lg-start mx-auto mx-lg-0">

            <h4
              className="fw-bold mb-3 mb-lg-4"
              style={{ color: "#111827", fontSize: "1rem" }}
            >
              Follow Us
            </h4>

            <ul className="nav flex-column gap-2 align-items-center align-items-lg-start">

              <li><a href="#" className="nav-link p-0 text-secondary">Instagram</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Twitter</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">Facebook</a></li>
              <li><a href="#" className="nav-link p-0 text-secondary">YouTube</a></li>

            </ul>

          </div>

        </div>

        {/* Copyright */}

        <hr className="my-4" />

        <p
          className="text-center mb-0 pb-4"
          style={{
            color: "#6B7280",
            fontSize: "0.9rem",
          }}
        >
          Copyright 2026 © QuickBlog GreatStack - All Right Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;