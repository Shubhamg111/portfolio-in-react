import React from 'react'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <div>
        <div className="section-counter paralax-mf bg-image" style={{backgroundImage:"url(assets/img/counters-bg.jpg)" }}>
      <div className="overlay-mf"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-check"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter purecounter"><CountUp end={45} duration={5} /></p>
                <span className="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-journal-richtext"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter purecounter"><CountUp end={5} duration={4} /></p>
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-people"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter purecounter"><CountUp end={77} duration={5} /></p>
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-award"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter purecounter"><CountUp end={14} duration={5} /></p>
                <span className="counter-text">AWARD WON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Counter
