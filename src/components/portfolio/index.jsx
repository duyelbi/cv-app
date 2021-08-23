import React from 'react'

import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

import portfolio1 from "../../assets/images/portfolio1.jpg";
import portfolio2 from "../../assets/images/portfolio2.jpg";
import portfolio3 from "../../assets/images/portfolio3.jpg";
import portfolio4 from "../../assets/images/portfolio4.jpg";
import portfolio5 from "../../assets/images/portfolio5.jpg";
import portfolio6 from "../../assets/images/portfolio6.jpg";

const Portfolio = () => {
    return (
      <section className="portfolio bg_pattern" id="portfolio">
        <div className="container d-flex flex-column justify-content-between h-100 ">
          <div className="section-title flex-grow-1">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-left">
                  <h2 className="text_background">
                    My Projects
                    <span className="heading_background">Portfolio</span>
                  </h2>
                  <p className="m-0">
                    There are many variations of passages of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content flex-grow-1">
            <div className="row portfolio-items">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 frontenddevelopment">
                <div className="portfolio-item">
                  <a
                    href={portfolio1}
                    className="portfolio-single portfolio-image"
                  >
                    <div className="item-box">
                      <div className="item-image">
                        <img
                          src={portfolio1}
                          width="350"
                          height="410"
                          className="d-block img-fluid mx-auto"
                          alt=""
                        />
                      </div>
                      <div className="item-details d-flex align-items-center">
                        <div className="item-details-ins text-center w-100">
                          <div className="mb-2">
                            <span className="mbri-photos"></span>
                          </div>
                          <h3>Project Title</h3>
                          <p>Category</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 backenddevelopment">
                <div className="portfolio-item">
                  <a
                    href="https://www.youtube.com/watch?time_continue=85&amp;v=oC1m-dTFX6g"
                    className="portfolio-single iframe_popup"
                  >
                    <div className="item-box">
                      <div className="item-image">
                        <img
                          src={portfolio2}
                          width="350"
                          height="410"
                          className="d-block img-fluid mx-auto"
                          alt=""
                        />
                      </div>
                      <div className="item-details d-flex align-items-center">
                        <div className="item-details-ins text-center w-100">
                          <div className="mb-2">
                            <span className="mbri-video-play"></span>
                          </div>
                          <h3>Project Title</h3>
                          <p>Category</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 seo">
                <div className="portfolio-item">
                  <a
                    href="./assets/images/portfolio3.jpg"
                    className="portfolio-single portfolio-image"
                  >
                    <div className="item-box">
                      <div className="item-image">
                        <img
                          src={portfolio3}
                          width="350"
                          height="410"
                          className="d-block img-fluid mx-auto"
                          alt=""
                        />
                      </div>
                      <div className="item-details d-flex align-items-center">
                        <div className="item-details-ins text-center w-100">
                          <div className="mb-2">
                            <span className="mbri-photos"></span>
                          </div>
                          <h3>Project Title</h3>
                          <p>Category</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 backenddevelopment">
                <div className="portfolio-item ">
                  <a
                    href="/"
                    className="portfolio-single"
                  >
                    <div className="item-box">
                      <div className="item-image">
                        <img
                          src={portfolio4}
                          width="350"
                          height="410"
                          className="d-block img-fluid mx-auto"
                          alt=""
                        />
                      </div>
                      <div className="item-details d-flex align-items-center">
                        <div className="item-details-ins text-center w-100">
                          <div className="mb-2">
                            <span className="mbri-link"></span>
                          </div>
                          <h3>Project Title</h3>
                          <p>Category</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 frontenddevelopment">
                <div className="portfolio-item">
                  <a
                    href="./assets/images/portfolio5.jpg"
                    className="portfolio-single portfolio-image"
                  >
                    <div className="item-box">
                      <div className="item-image">
                        <img
                          src={portfolio5}
                          width="350"
                          height="410"
                          className="d-block img-fluid mx-auto"
                          alt=""
                        />
                      </div>
                      <div className="item-details d-flex align-items-center">
                        <div className="item-details-ins text-center w-100">
                          <div className="mb-2">
                            <span className="mbri-photos"></span>
                          </div>
                          <h3>Project Title</h3>
                          <p>Category</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-2 mt-4 frontenddevelopment">
                <div className="portfolio-item">
                  <a
                    href="./assets/images/portfolio6.jpg"
                    className="portfolio-single portfolio-image"
                  >
                    <div className="item-box">
                      <div className="item-image">
                        <img
                          src={portfolio6}
                          width="350"
                          height="410"
                          className="d-block img-fluid mx-auto"
                          alt=""
                        />
                      </div>
                      <div className="item-details d-flex align-items-center">
                        <div className="item-details-ins"></div>
                        <div className="item-details-ins text-center w-100">
                          <div className="mb-2">
                            <span className="mbri-photos"></span>
                          </div>
                          <h3>Project Title</h3>
                          <p>Category</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center mt-5">
                <a href="/" className="btn btn-outline-primary">
                  <span>
                    <FontAwesomeIcon icon={faDribbble} />
                  </span>
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio
