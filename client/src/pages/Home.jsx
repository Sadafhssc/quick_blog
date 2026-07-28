import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <>
     <Navbar/>
     <Header/>
     <BlogList/>
     <Subscribe/>
     <Footer/>
    </>
  )
}

export default Home
