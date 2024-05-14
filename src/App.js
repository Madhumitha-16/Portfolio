import About from './About/About';
import './App.css';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Interest from './Interests/Interest';
import Project from './Projects/Project';
import Skills from './Skills & Experience/Skills';

function App() {
  return (
    <>
  <title>Madhu</title>

  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
  />

  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    rel="stylesheet"
  />

  <link href="../lib/animate/animate.min.css" rel="stylesheet" />
  <link href="../lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
  <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  <script src="../js/main.js"></script>
  {/* Customized Bootstrap Stylesheet */}
  <link href="../css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="../css/style.css" rel="stylesheet" />
  {/* Spinner Start */}
  {/* <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>  */}

  <Header />
  <Skills />
  
  {/* <About /> */}



  <Interest />

 <Project />

  {/* Team Start */}
  <div className="container-xxl py-4 pb-5" id="team">
    <div className="container">
      <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="col-lg-6">
          <h1 className="display-5 mb-0">Certifications</h1>
        </div>
        <div className="col-lg-6 text-lg-end">
          <a className="btn btn-primary py-3 px-5" href="">
            Contact Us
          </a>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded" src="img/azure.png" alt=""  />
            <div className="team-text bg-white rounded-end p-4">
              <div>
                <h5>Azure Data Fundamentals</h5>
                <span>Microsoft - Jan 2023</span>
              </div>
              <i className="fa fa-arrow-right fa-2x text-primary" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded" src="img/Slide2.PNG" alt="" />
            <div className="team-text bg-white rounded-end p-4">
              <div>
                <h5>Google Python Crash Course</h5>
                <span>Google - Feb 2023</span>
              </div>
              <i className="fa fa-arrow-right fa-2x text-primary" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded" src="img/cloud.png" alt="" />
            <div className="team-text bg-white rounded-end p-4">
              <div>
                <h5>Cloud Computing and Distributed Systems</h5>
                <span>NPTEL (Silver Badge) - Mar 2023</span>
              </div>
              <i className="fa fa-arrow-right fa-2x text-primary" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded" src="img/c.png" alt="" />
            <div className="team-text bg-white rounded-end p-4">
              <div>
                <h5>C Programming</h5>
                <span>NPTEL (Silver Badge) - Apr 2022 </span>
              </div>
              <i className="fa fa-arrow-right fa-2x text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <Contact /> */}

  
  {/* Copyright Start */}
  <div className="container-fluid bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
         
        </div>
        <div className="col-md-6 text-center text-md-end">
          

        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>

</>

  );
}

export default App;
