import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faTabletAlt,
  faMugHot,
  faLayerGroup,
  faHeart,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import "./services.css";

const Services = () => {
    return (
      <section className="services bg_pattern" id="service">
        <div className="container d-flex flex-column justify-content-between h-100 ">
          <div className="section-title flex-grow-1">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-left">
                  <h2
                    data-aos="heading-show"
                    className="text_background"
                  >
                    What I Do
                    <span className="heading_background">Services</span>
                  </h2>
                  <p className="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content flex-grow-1">
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-4 mb-2">
                <div className="service-single text-center p-5">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      style={{ color: "rgb(26, 123, 183)" }}
                    />
                  </div>
                  <h3 className="my-3">Development</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mb-2">
                <div className="service-single text-center p-5">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      icon={faTabletAlt}
                      style={{ color: "rgb(26, 123, 183)" }}
                    />
                  </div>
                  <h3 className="my-3">Responsive</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mb-2">
                <div className="service-single text-center p-5">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      icon={faMugHot}
                      style={{ color: "rgb(26, 123, 183)" }}
                    />
                  </div>
                  <h3 className="my-3">UI/UX Design</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mb-2">
                <div className="service-single text-center p-5">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      style={{ color: "rgb(26, 123, 183)" }}
                    />
                  </div>
                  <h3 className="my-3">User Friendly</h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mb-2">
                <div className="service-single text-center p-5">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "rgb(26, 123, 183)" }}
                    />
                  </div>
                  <h3 className="my-3">Lovely</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mb-2">
                <div className="service-single text-center p-5">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      icon={faRocket}
                      style={{ color: "rgb(26, 123, 183)" }}
                    />
                  </div>
                  <h3 className="my-3">Bootstrap 5</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Services
