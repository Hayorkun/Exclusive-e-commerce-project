import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Categories from '../component/Categories'
import Footer from '../component/Footer'
import OurProduct from '../component/OurProduct'

function Homepage() {
  return (
    <>
    <Hero/>
    <Categories/>
    <OurProduct/>
    <Footer/>
    </>
  )
}

export default Homepage