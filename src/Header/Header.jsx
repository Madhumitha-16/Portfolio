import React, { useState, useEffect } from 'react';
import './Header.css';
import 'wowjs';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
function Header() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [typewrite] = useTypewriter({
        words:['Passionate Web Developer', 'Full Stack Enthusiast', 'Front End Developer', 'WordPress Developer', 'Web Designer'],
        loop:{},
        typeSpeed: 50,
        deleteSpeed: 40
    })
    useEffect(() => {
      const handleScroll = () => {
        setShowNavbar(window.scrollY > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  
    return (
      <>
        <nav className={`navbar ${showNavbar ? 'show' : 'hidden'} navbar-expand-lg bg-white navbar-light sticky-top  shadow py-lg-0 px-4 px-lg-5`}>
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="text-primary fw-bold m-0">&lt;Madhu /&gt;</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto py-0">
              <a href="#home" className="nav-item nav-link active">
                Home
              </a>
             
              <a href="#skill" className="nav-item nav-link">
                Skills
              </a>
             
              <a href="#service" className="nav-item nav-link">
                Achievements
              </a>
            </div>
            <a
              href="index.html"
              className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block"
            >
              <h3 className=" fw-bold m-0">&lt;Madhu /&gt;</h3>
            </a>
            <div className="navbar-nav me-auto py-0">
            <a href="#service" className="nav-item nav-link">
                Experience
              </a>
              <a href="#project" className="nav-item nav-link">
                Projects
              </a>
              <a href="#team" className="nav-item nav-link">
                Certifications
              </a>
              
            </div>
          </div>
        </nav>
        
        <div className="container-fluid bg-light my-5 mt-0" id="home">
          <div className="container" style={{ paddingTop: "5%" }}>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                <h3 className="text-primary mb-3">I'm</h3>
                <h1 className="display-3 mb-3">Madhumitha B</h1>
                <div className="typed-text-output">
                <h2 class="typed-text-output d-inline"></h2>
                    <div class="typed-text d-none"></div>
                <h3>A {typewrite}</h3>
                </div>
                <div className="d-flex align-items-center pt-5">
                <a href='https://drive.google.com/file/d/1tj5Y6sQo8mpGLo-_fRuvFMPQ2qUXTH9G/view?usp=drive_link' target="_blank">
                  <button
                    className="btn btn-primary py-3 px-4 me-5"
                    onclick="window.open('https://drive.google.com/file/d/1tj5Y6sQo8mpGLo-_fRuvFMPQ2qUXTH9G/view?usp=drive_link', '_blank')"
                  >
                    Resume
                  </button>
                  </a>
                  
                  
                    <span />
                
          <p className="mb-0">Find me here: </p>
          <div className="d-flex pt-2 ml-2">
          <a className="btn btn-square btn-primary me-2" href="">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn btn-square btn-primary me-2" href="">
              <i className="fab fa-github" />
            </a>
            <a className="btn btn-square btn-primary me-2" href="">
              <i className="fab fa-hackerrank" />
            </a>
            <a className="btn btn-square btn-primary me-2" href="">
            <img src="https://leetcode.com/favicon.ico" className="icon" alt="LeetCode Icon" width="24" height="24" />

            </a>
           
            </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="img/_73dae1d0-9b40-4525-a8e7-0a514f73e238-removebg-preview.png"
                  alt="Avatar"
                  width={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header;
