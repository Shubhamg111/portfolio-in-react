import React from 'react'

const Contact = () => {
  return (
    <>

<section id="contact" class="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage:"url(assets/img/overlay-bg.jpg)"}}>
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        Send Message
                      </h5>
                    </div>
                    <div>
                      <form action="https://api.web3forms.com/submit" method='post'>
                      <input type="hidden" name="access_key" value="9ecc83d1-ba06-4bb7-ad56-c7d37ddc57ba"/>
                        <input type="text" class="form-control" name="Name" placeholder="Name" id="name" required /><br />
                        <input type="email" class="form-control" name="Sender" placeholder="E-mail" id="email" required /><br />
                        <input type="text" class="form-control" name="Subject" placeholder="Subject" id="subject" required /><br />
                        <textarea class="form-control" name="Message" placeholder="Your Message" id="message"
                          style={{height:"150px;"}}></textarea><br/>
                        <center><button class="btn btn-primary theme-button btn-md px-5 shadow" type="submit" data-aos="zoom-in">Send</button></center>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        Connect with us today to explore possibilities and unlock opportunities. Get in touch for a seamless collaboration experience.
                      </p>
                      <ul class="list-ico">
                        <li><span class="bi bi-geo-alt"></span>Macchapokhari 29, kathmandu, 44600, Nepal</li>
                        <li><span class="bi bi-phone"></span> (+977) 9829590999</li>
                        <li><span class="bi bi-envelope"></span> guptashuvam111@gmail.com</li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100076086873754" class="btn btn-outline-dark rounded-circle px-2 py-1" target="_blank"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/s.u.b.h.a.m.0522/" class="btn btn-outline-dark rounded-circle px-2 py-1 mx-2" target="_blank"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="https://github.com/Shubhamg111" class="btn btn-outline-dark rounded-circle px-2 py-1" target="_blank"><i class="bi bi-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/shubham-guptaa/" class="btn btn-outline-dark rounded-circle px-2 py-1 mx-2" target="_blank"><i class="bi bi-linkedin"></i></a></li>
                      </ul>
                    </div>
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

export default Contact
