import React from 'react'

const Footer = () => {
    return (
      <div>
        <footer className="horizontal-footer shadow-footer">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-12">
                <div className="text-center">
                  <ul className="social-icons list-inline mt-5">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-git"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-tumblr"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright-text mt-3 mb-5">
                    2021 ©. RectCV Template. Developed and Designed by
                    <b>themesuccess</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Footer
