import React from 'react'
import DashboardAdmin from '../../components/DashboardAdmin'

const ListBlogs = () => {
  return (
    <>
      <div
        className="flex-grow-1"
        style={{
          background: "#F6F9FC",
          padding: "22px 30px",
        }}>
        <div className="d-flex align-items-center mt-1 text-secondary">

          <h5
            className="fw-medium mb-0"
            style={{
              color: "#2D3748",
            }}
          >
            Latest Blogs
          </h5>
        </div>
      </div>
      <DashboardAdmin />
    </>
  )
}

export default ListBlogs
