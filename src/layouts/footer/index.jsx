import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faGit,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";

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
                      <a href="/">
                        <FontAwesomeIcon
                          className="faIcon"
                          icon={faFacebookF}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <FontAwesomeIcon
                          className="faIcon"
                          icon={faLinkedinIn}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <FontAwesomeIcon
                          className="faIcon"
                          icon={faPinterestP}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <FontAwesomeIcon
                          className="faIcon"
                          icon={faGit}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <FontAwesomeIcon
                          className="faIcon"
                          icon={faTumblr}
                        />
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
