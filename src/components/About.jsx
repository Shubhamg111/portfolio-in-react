import React from 'react'

const About = () => {
  return (
    <>
        <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-4 me-4">
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="about-img m-auto">
                        <img src="assets/img/Untitled design.jpg" className="img-fluid rounded b-shadow-a" alt="subham gupta" loading="lazy" width="100%"/>
                      </div>
                     
                    </div>
                  </div>
                 
                </div>
                <div className="col-md-7">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <div className="about-info">
                      <p><span className="title-s">Name: </span> <span>Subham Gupta</span></p>
                      <p><span className="title-s">Profile: </span> <span>Full Stack Developer</span></p>
                      <p><span className="title-s">Email: </span> <span>guptashuvam111@gmail.com</span></p>
                      <p><span className="title-s">Phone: </span> <span>(+977) 9829590999</span></p>
                    </div>
                    <p className="lead">
                      A passionate programmer and designer, I thrive on challenges in collaborative environments. My sharp communication skills and natural teamwork spirit make me an asset to any team. Eager to expand my programming expertise, I'm driven by a quest for innovative solutions and constant learning.

                    </p>
                 
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default About
