import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faGit,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

import avatar from "../../assets/images/avatar.jpg";

const About = () => {
  return (
    <section className="about bg_pattern" id="about">
      <div className="container d-flex justify-content-between flex-column h-100">
        <div className="section-title flex-grow-1">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-left">
                <h2 className="text_background">
                  Who Am I<span className="heading_background">About Me</span>
                </h2>
                <p className="m-0">Get to know me</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content flex-grow-1">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="avatar-area m-auto">
                <img
                  src={avatar}
                  width="400"
                  height="550"
                  alt=""
                  className="img-fluid mx-auto"
                />
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <h3 className="m-0">I'm Duy Elbi</h3>
              <p class="my-4">
                Hi! There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-info mb-2">
                    <span className="desc">Full Name: </span>
                    <span>Nguyễn Đức Duy</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-info mb-2">
                    <span className="desc">Age: </span>
                    <span>22 Years Old</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-info mb-2">
                    <span className="desc">Experience: </span>
                    <span>1 Years</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-info mb-2">
                    <span className="desc">Email: </span>
                    <span>duylanh1818@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="button_and_social my-4">
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-6">
                    <a href="/" class="btn btn-outline-primary btn-lg">
                      Download CV
                    </a>
                  </div>
                  <div className="col-xl-6">
                    <ul class="social-icons list-inline mt-4 mt-xl-0">
                      <li class="list-inline-item">
                        <a href="/">
                          <i>
                            <FontAwesomeIcon
                              className="faIcon"
                              icon={faFacebookF}
                            />
                          </i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="/">
                          <i>
                            <FontAwesomeIcon
                              icon={faLinkedinIn}
                              className="faIcon"
                            />
                          </i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="/">
                          <i>
                            <FontAwesomeIcon
                              icon={faPinterestP}
                              className="faIcon"
                            />
                          </i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="/">
                          <i>
                            <FontAwesomeIcon icon={faGit} className="faIcon" />
                          </i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="/">
                          <i>
                            <FontAwesomeIcon
                              icon={faTumblr}
                              className="faIcon"
                            />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
