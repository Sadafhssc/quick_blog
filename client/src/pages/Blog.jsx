import React from 'react'
import Navbar from '../components/Navbar'
import BlogDetail from '../components/BlogDetail'
import Footer from '../components/Footer'
import Comment from '../components/Comment'
import SocialMedia from '../components/SocialMedia'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogDetail/>
      <Comment/>
      <SocialMedia/>
      <Footer/>
    </div>
  )
}

export default Blog
