import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Counter from '../components/Counter'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Blogs from '../components/Blogs'
import Hire from '../components/Hire'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <Banner/>
      <About/>
      <Services/>
      <Counter/>
      {/* <Works/> */}
      {/* <Testimonials/> */}
      <Blogs/>
      <Contact/>
      <Hire/>
      <Footer/>


    </div>
  )
}

export default Homepage
