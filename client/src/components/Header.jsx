import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const Header = () => {
    const {input,setInput}=useAppContext();
    // FIX: switched from a ref to controlled state so we can track
    // whether the input has a value (needed to conditionally show
    // the clear button) and clear it programmatically
    const [searchValue,setSearchValue]=useState("");

    const handleSubmit=(e)=>{
     e.preventDefault();
     setInput(searchValue);
    }

    // FIX: added clear handler — resets local input, clears the
    // context filter value (so all blogs show again), and resets
    // to an empty search state
    const handleClear=()=>{
     setSearchValue("");
     setInput("");
    }

    return (
        <>
         <section
  className="text-center py-5"
  style={{
    background:
      "radial-gradient(circle at 30% 35%, rgba(255,220,230,.45), transparent 35%), radial-gradient(circle at 70% 30%, rgba(195,230,255,.45), transparent 35%)",
  }}
>
  <div className="container">

    {/* AI Badge */}
    <div
      className="d-inline-flex align-items-center gap-2 border rounded-pill px-4 py-2 mb-4"
      style={{
        borderColor: "#374253",
        color: "#5044E5",
       backgroundColor:" #E5E7EB"
      }}
    >
      <span>New: AI feature integrated</span>
      <img src={assets.star_icon} alt="star" width="14" />
    </div>

    {/* Heading */}
    <h1
      className="fw-bold lh-1 mb-4"
      style={{ fontSize: "3.7rem",color:" #374253" }}
    >
      Your own{" "}
      <span style={{ color: "#5044E5" }}>
        blogging
      </span>
      <br />
      platform.
    </h1>

    {/* Paragraph */}
    <p
      className="text-secondary mx-auto mb-5"
      style={{
        maxWidth: "720px",
        fontSize: "1rem",
      }}
    >
      This is your space to think out loud, to share what matters,
      and to write without filters. Whether it's one word or a
      thousand, your story starts right here.
    </p>
{/* Search */}
<div
  className="d-flex align-items-stretch justify-content-center mx-auto"
  style={{ maxWidth: "560px", gap: "10px" }}
>
  <input
    type="text"
    value={searchValue}
    onChange={(e)=>setSearchValue(e.target.value)}
    className="form-control py-3 shadow-sm"
    placeholder="Search for blogs"
    style={{
      borderRadius: "8px",
      border: "1px solid #D8DEE8",
    }}
  />

  {searchValue && (
    <button
      type="button"
      onClick={handleClear}
      className="btn shadow-sm"
      style={{
        border: "1.5px solid #5044E5",
        background: "transparent",
        color: "#5044E5",
        fontSize: "0.95rem",
        fontWeight: 500,
        whiteSpace: "nowrap",
        borderRadius: "8px",
        padding: "0 24px",
      }}
      aria-label="Clear search"
    >
      Clear
    </button>
  )}

  <button
    className="btn px-5 text-white shadow-sm"
    onClick={handleSubmit}
    style={{
      backgroundColor: "#5044E5",
      borderRadius: "8px",
      whiteSpace: "nowrap",
    }}
  >
    Search
  </button>
</div>

  </div>
</section>
        </>
    )
}

export default Header