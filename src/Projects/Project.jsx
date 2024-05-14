import React from 'react'

function Project() {
  return (
    <>
         <div className="container-xxl py-6 pt-5" id="project">
    <div className="container">
      <div
        className="row g-5 mb-5 align-items-center wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="col-lg-6">
          <h1 className="display-5 mb-0">My Projects</h1>
        </div>
        <div className="col-lg-6 text-lg-end">
          <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
            <li className="mx-3 active" data-filter="*">
              All Projects
            </li>
            <li className="mx-3" data-filter=".first">
              Web Development
            </li>
            <li className="mx-3" data-filter=".second">
              Augmented Reality
            </li>
            <li className="mx-3" data-filter=".third">
              WordPress
            </li>
          </ul>
        </div>
      </div>
      <div
        className="row g-4 portfolio-container wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="col-lg-3 col-md-6 portfolio-item first">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/project-1.jpg" alt="" />
            
            <div className="portfolio-btn">
            
            <h1>Phoeniks</h1>
            <h5></h5>
          
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href="img/project-1.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href=""
              >
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 portfolio-item second">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/project-2.jpg" alt="" />
            <div className="portfolio-btn">
            <h1>VDrive</h1>

              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href="img/project-2.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href=""
              >
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 portfolio-item first">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/project-3.jpg" alt="" />
            <div className="portfolio-btn">
            <h1>Electricity Bill Generator - Core Java</h1>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href="img/project-3.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href=""
              >
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 portfolio-item second">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/project-4.jpg" alt="" />
            <div className="portfolio-btn">
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href="img/project-4.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href=""
              >
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 portfolio-item first">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/project-5.jpg" alt="" />
            <div className="portfolio-btn">
            <h1>CatAR</h1>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href="img/project-5.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href=""
              >
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 portfolio-item second">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/project-6.jpg" alt="" />
            <div className="portfolio-btn">
            <h1>Google Keep App Clone</h1>

              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href="img/project-6.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href=""
              >
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 portfolio-item second">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/project-6.jpg" alt="" />
            <div className="portfolio-btn">
            <h1>Nannilam Organics</h1>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href="img/project-6.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href=""
              >
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 portfolio-item second">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/project-6.jpg" alt="" />
            <div className="portfolio-btn">
            <h1>Madhu Photography</h1>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href="img/project-6.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a
                className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                href=""
              >
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Project