import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <link href="public/css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="../css/style.css" rel="stylesheet" />
        <div className="container-xxl py-6 pb-5" id="skill">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="display-5 mb-5">Skills &amp; Experience</h1>
         
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">HTML</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: '95%' }}
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">CSS</h6>
                  <h6 className="font-weight-bold">85%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: '85%' }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Javascript</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: '90%' }}
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              
            </div>
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">C Programming</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: '90%' }}
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Java</h6>
                  <h6 className="font-weight-bold">70%</h6>
                </div>
                <div className="progress">
                <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '70%' }}
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Python</h6>
                  <h6 className="font-weight-bold">60%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: '60%' }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            
            
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">React</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: '95%' }}
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Angular</h6>
                  <h6 className="font-weight-bold">65%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: '65%' }}
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Node.js | Express.js</h6>
                  <h6 className="font-weight-bold">75%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: '75%' }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              
            </div>
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">MySQL</h6>
                  <h6 className="font-weight-bold">80%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: '80%' }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Wordpress</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Mongo DB</h6>
                  <h6 className="font-weight-bold">60%</h6>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: '60%' }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            
            
          </div>
          
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
  <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
    <li className="nav-item w-50">
    <button
                    className={`nav-link w-100 py-3 fs-5 ${activeTab === 'experience' ? 'active' : ''}`}
                    onClick={() => handleTabClick('experience')}
                  >
                    Experience
                  </button>
    </li>
    <li className="nav-item w-50">
    <button
                    className={`nav-link w-100 py-3 fs-5 ${activeTab === 'education' ? 'active' : ''}`}
                    onClick={() => handleTabClick('education')}
                  >
                    Education
                  </button>
    </li>
  </ul>
  <div className="tab-content">
  <div className={`tab-pane fade show ${activeTab === 'experience' ? 'active' : ''}`}>
              <div className="row gy-5 gx-4">
                <div className="col-sm-6">
                  <h5>Web Developer Intern</h5>
                  <hr className="text-primary my-2" />
                  <p className="text-primary mb-1">5 months - 2023</p>
                  <h6 className="mb-0" style={{color:"#807e7a",fontWeight:"100"}}>Infosys Springboard, Remote</h6>
                  <h6 className="mb-0" style={{lineHeight:"30px"}}>Tech Stack: MERN Stack</h6>
                </div>
                <div className="col-sm-6">
                  <h5>Frontend Developer Intern</h5>
                  <hr className="text-primary my-2" />
                  <p className="text-primary mb-1">3 months - 2023</p>
                  <h6 className="mb-0" style={{color:"#807e7a",fontWeight:"100"}}>Vertace, Chennai</h6>
                  <h6 className="mb-0" style={{lineHeight:"30px"}}>Tech Stack: React | Redux |Antd</h6>

                </div>
                <div className="col-sm-6">
                  <h5>Wordpress Developer</h5>
                  <hr className="text-primary my-2" />
                  <p className="text-primary mb-1">5 months - 2022</p>
                  <h6 className="mb-0" style={{color:"#807e7a",fontWeight:"100",lineHeight:"20px"}}>QCFI- Coimbatore Chapter</h6>
                  <h6 className="mb-0" style={{lineHeight:"30px"}}>Tech Stack: WordPress | UI Designing </h6>

                </div>
                <div className="col-sm-6">
                  <h5>Wordpress Developer</h5>
                  <hr className="text-primary my-2" />
                  <p className="text-primary mb-1">3 months - 2021</p>
                  <h6 className="mb-0" style={{color:"#807e7a",fontWeight:"100"}}>Essa Global Solutions, Pune</h6>
                  <h6 className="mb-0" style={{lineHeight:"30px"}}>Tech Stack: WordPress | UI Designing </h6>

                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${activeTab === 'education' ? 'show active' : ''}`}>
              <div className="row gy-5 gx-4">
                <div className="col-sm-12">
                  <h5>BTech - Information Technology</h5>
                  <hr className="text-primary my-2" />
                  <p className="text-primary mb-1">2000 - 2024</p>
                  <h6 className="mb-0">R.M.K. Engineering College</h6>
                  <h6 className="mb-0">CGPA: 9.42 </h6>

                </div>
                <div className="col-sm-6">
                  <h5>XII Std</h5>
                  <hr className="text-primary my-2" />
                  <p className="text-primary mb-1">2019 - 2020</p>
                  <h6 className="mb-0">St. Mary's Matriculation Higher Secondary School</h6>
                  <h6 className="mb-0">Percentage: 87.17% </h6>

                </div>
                <div className="col-sm-6">
                  <h5>X Std</h5>
                  <hr className="text-primary my-2" />
                  <p className="text-primary mb-1">2017 - 2018</p>
                  <h6 className="mb-0">St. Mary's Matriculation Higher Secondary School</h6>
                  <h6 className="mb-0">Percentage: 96.20% </h6>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Skills