import React from 'react'

const Testimonials = () => {
  return (
    <div>
        <div class="testimonials paralax-mf bg-image" style={{backgroundImage: "url(assets/img/overlay-bg.jpg);", height:"400px;"}}>
      <div class="overlay-mf"></div>
      <div class="container testimonials-content">
        <div class="row">
          <div class="col-md-12" >
            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <center><h2 class="text-light text-decoration-underline">Happy Clients</h2></center>
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="author-test">
                      <img src="assets/img/Clients/K.png" width="100px" alt="subham gupta" loading="lazy" class="rounded-circle b-shadow-a"/>
                      <span class="author">Kishor Munikar</span>
                    </div>
                    <div class="content-test">
                      <p class="description lead">
                       <span class="fs-3 opacity-50"><i class='bx bxs-quote-alt-left' ></i></span> Collaborating with him has been delightful. His meticulous attention to detail and commitment to top-tier results surpassed my expectations. Highly endorse him for exceptional service. <span class="fs-3 opacity-50"><i class='bx bxs-quote-alt-right' ></i></span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="author-test">
                      <img src="assets/img/Clients/anjil.webp" width="100px" alt="Subham Gupta" class="rounded-circle b-shadow-a"/>
                      <span class="author">Anjil Pandey</span>
                    </div>
                    <div class="content-test">
                      <p class="description lead">
                        <span class="fs-3 opacity-50"><i class='bx bxs-quote-alt-left' ></i></span> His attention to detail, professionalism, and dedication to quality results surpassed my expectations. Highly recommended for expertise.<span class="fs-3 opacity-50"><i class='bx bxs-quote-alt-right' ></i></span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="author-test">
                      <img src="assets/img/Clients/T.png" loading="lazy" width="100px" alt="subham gupta" class="rounded-circle b-shadow-a"/>
                      <span class="author">Tanka Raj Adhikari</span>
                    </div>
                    <div class="content-test">
                      <p class="description lead">
                        <span class="fs-3 opacity-50"><i class='bx bxs-quote-alt-left' ></i></span> His demonstrate professionalism, attention to detail, and proactive problem-solving.He is committed to delivering high-quality work on time, continuously improving their skills, and ensuring client satisfaction.<span class="fs-3 opacity-50"><i class='bx bxs-quote-alt-right' ></i></span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
              </div>
              {/* <!-- <div class="swiper-pagination"></div> --> */}
            </div>

            {/* <!-- <div id="testimonial-mf" class="owl-carousel owl-theme"></div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
