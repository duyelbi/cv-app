import React from "react";

import "./client.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,

} from "@fortawesome/free-solid-svg-icons";

import background_3 from "../../assets/images/background_3.jpg";
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";
import client3 from "../../assets/images/client3.jpg";

const styles = {
  testimonial: {
    backgroundImage: `url(${background_3})`,
  },

  authorPicture1: {
    backgroundImage: `url(${client1})`,
  },

  authorPicture2: {
    backgroundImage: `url(${client2})`,
  },

  authorPicture3: {
    backgroundImage: `url(${client3})`,
  },
};

const Client = () => {
  return (
    <div
      className="section testimonial backgound-section"
      style={styles.testimonial}
    >
      <div className="container">
        <div className="row">
          <div>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active cloned" d-block w-100>
                  <div className="col-12">
                    <div className="testimonial-box d-flex flex-column flex-md-row justify-content-between align-items-start p-5">
                      <div className="testimonial_icon mr-4">
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                        />
                      </div>
                      <div className="testimonial_content mt-3">
                        <p className="m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Atque, tenetur nisi iste, ipsa obcaecati quis
                          laudantium error distinctio excepturi
                        </p>
                        <div className="testimonial_author row mt-3">
                          <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                            <div className="row">
                              <div className="col-12 col-md-3">
                                <div
                                  className="author_picture mr-3"
                                  style={styles.authorPicture1}
                                ></div>
                              </div>
                              <div className="col-12 col-md-9">
                                <div className="author_info py-2">
                                  <h3>Linzi Landry</h3>
                                  <p>Graphic Designer</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item cloned" d-block w-100>
                  <div className="col-12">
                    <div className="testimonial-box d-flex flex-column flex-md-row justify-content-between align-items-start p-5">
                      <div className="testimonial_icon mr-4">
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                        />
                      </div>
                      <div className="testimonial_content mt-3">
                        <p className="m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Atque, tenetur nisi iste, ipsa obcaecati quis
                          laudantium error distinctio excepturi
                        </p>
                        <div className="testimonial_author row mt-3">
                          <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                            <div className="row">
                              <div className="col-12 col-md-3">
                                <div
                                  className="author_picture mr-3"
                                  style={styles.authorPicture2}
                                ></div>
                              </div>
                              <div className="col-12 col-md-9">
                                <div className="author_info py-2">
                                  <h3>Ebony Phan</h3>
                                  <p>Web Developer</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item cloned" d-block w-100>
                  <div className="col-12">
                    <div className="testimonial-box d-flex flex-column flex-md-row justify-content-between align-items-start p-5">
                      <div className="testimonial_icon mr-4">
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                        />
                      </div>
                      <div className="testimonial_content mt-3">
                        <p className="m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Atque, tenetur nisi iste, ipsa obcaecati quis
                          laudantium error distinctio excepturi
                        </p>
                        <div className="testimonial_author row mt-3">
                          <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                            <div className="row">
                              <div className="col-12 col-md-3">
                                <div
                                  className="author_picture mr-3"
                                  style={styles.authorPicture3}
                                ></div>
                              </div>
                              <div className="col-12 col-md-9">
                                <div className="author_info py-2">
                                  <h3>Mikaela Palmer</h3>
                                  <p>CEO of Company</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
