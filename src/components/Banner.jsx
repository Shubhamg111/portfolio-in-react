import React from 'react'
import Typed from 'typed.js';
import { useEffect } from 'react';


const Banner = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Instructor", "Python Developer", "Web Developer"],
      typeSpeed: 50,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (

    
    <div>
   
        <div id="banner" className="banner route bg-image" style={{backgroundImage:"url(assets/img/Img-Background.jpg)"}} >
    <div className=""></div>
    <div className="banner-content display-table">
      <div className="table-cell">
        <div className="container" style={{marginTop:'200px'}}>
          <h1 className='d-none'>Subham Gupta</h1>
          <h2 className="banner-title mb-2">I am <span className='myname'><span className="text-primary">S</span>ubham <span className="text-primary" >G</span>upta</span></h2>
          <p className="banner-subtitle"> <span ref={el} /></p>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100076086873754" target="_blank" className="text-dark bg-light rounded-circle px-2 py-1 rounded-circle fs-4 mx-1"><span
                className="bx bxl-facebook" aria-hidden="true"></span></a>
            <a href="https://github.com/Shubhamg111"  target="_blank" className="text-dark bg-light rounded-circle px-2 py-1 rounded-circle fs-4 mx-1"><span className="bx bxl-github"
                aria-hidden="true"></span></a>
            <a href="https://www.linkedin.com/in/shubham-guptaa/" target="_blank" className="text-dark bg-light rounded-circle px-2 py-1 rounded-circle fs-4 mx-1"><span className="bx bxl-linkedin"
                aria-hidden="true"></span></a>
            <a href="https://www.instagram.com/s.u.b.h.a.m.0522/" target="_blank" className="text-dark bg-light rounded-circle px-2 py-1 rounded-circle fs-4 mx-1"><span className="bx bxl-instagram"
                aria-hidden="true"></span></a>
            
          </div>
          <script>
          
        </script>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Banner
