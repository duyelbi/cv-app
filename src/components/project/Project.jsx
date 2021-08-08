import React from 'react'

const Project = () => {
    return (
      <div
        className="section project backgound-section"
        style="background-image: url(./assets/images/background_3.jpg)"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row box p-5 mx-3 mx-md-0 align-items-center text-center">
                <div className="col-md-4 m-0 mb-3 mb-md-0">
                  <h3 className="m-0">Create a Website</h3>
                </div>
                <div className="col-md-4 m-0 mb-3 mb-md-0">
                  <p className="m-0">We can create and develop together.</p>
                </div>
                <div className="col-md-4">
                  <a href="#contact" className="btn btn-outline-primary">
                    Let's do this
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Project;
