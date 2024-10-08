import React, { useEffect, useState } from 'react'



const Header = () => {
  useEffect(() => {
    const headerScrolled = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    };

    window.addEventListener('scroll', headerScrolled);
    window.addEventListener('load', headerScrolled);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', headerScrolled);
      window.removeEventListener('load', headerScrolled);
    };
  }, []);


  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Handler for toggling mobile navigation
  const handleNavToggle = () => {
    setIsMobileNavOpen((prev) => !prev); // Toggle the state
  };

  // Handler for closing the mobile navigation when a nav item is clicked
  const handleNavItemClick = () => {
    setIsMobileNavOpen(false); // Close the mobile nav
  };


  return (
    <>

{/* <!-- Designed By Subham Gupta. --> */}
  {/* <!-- ======= Header ======= --> */}
  {/* <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">
      <a href="/" className="logo"><img src="assets/img/logo.png" alt="Subham Gupta" className="img-fluid"/></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#work">Work</a></li>
          <li><a className="nav-link scrollto " href="#blog">Blog</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      

    </div>
  </header> */}

<header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo">
          <img src="assets/img/logo.png" alt="subham gupta" className="img-fluid" />
        </a>

        <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/" onClick={handleNavItemClick}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about" onClick={handleNavItemClick}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services" onClick={handleNavItemClick}>
                Services
              </a>
            </li>
            {/* <li>
              <a className="nav-link scrollto" href="#work" onClick={handleNavItemClick}>
                Work
              </a>
            </li> */}
            <li>
              <a className="nav-link scrollto" href="#blog" onClick={handleNavItemClick}>
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact" onClick={handleNavItemClick}>
                Contact
              </a>
            </li>
          </ul>
          <i
            className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
            onClick={handleNavToggle}
          ></i>
        </nav>
      </div>
    </header>
  {/* <!-- End Header --> */}
  {/* <!-- Designed By Subham Gupta. --> */}
      
    </>
  )
}

export default Header
