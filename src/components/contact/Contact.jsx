import React from 'react';

import "./contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
      <div>
        <section className="contact" id="contact">
          <div className="container d-flex flex-column justify-content-between h-100 ">
            <div className="section-title flex-grow-1">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-left">
                    <h2
                      data-aos="heading-show"
                      className="text_background"
                    >
                      Get in Touch
                      <span className="heading_background">Contact Us</span>
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
                <div className="col-sm-4">
                  <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                    <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="contact-details mt-2">
                      <h5>Email Us</h5>
                      <p>
                        <a href="mailto:kevinmiller@alb.com">
                          kevinmiller@alb.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                    <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                      <FontAwesomeIcon icon={faMobileAlt} />
                    </div>
                    <div className="contact-details mt-2">
                      <h5>Call</h5>
                      <p>
                        <a href="tel:+1000123456789">+1 xxx-888-7887</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex flex-row flex-sm-column flex-md-row justify-content-md-center mb-3 text-left text-sm-center text-md-left">
                    <div className="contact-icon mr-md-3 mr-3 mr-sm-0">
                      <FontAwesomeIcon icon={faMapMarkedAlt} />
                    </div>
                    <div className="contact-details mt-2">
                      <h5>Visit</h5>
                      <p>New York, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-12">
                  <form action="php/form.php" method="post" id="contact-form">
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <div className="form-group form-focused">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            autocomplete="off"
                            required=""
                          />
                          <label>Full Name</label>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            autocomplete="off"
                            required=""
                          />
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="form-control"
                            autocomplete="off"
                            required=""
                          />
                          <label>Subject</label>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <div className="form-group">
                          <textarea
                            name="text"
                            id="text"
                            rows="6"
                            className="form-control"
                            required=""
                          ></textarea>
                          <label>Message</label>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <div className="form-group mb-0 text-end">
                          <button
                            type="submit"
                            id="contact-btn"
                            className="btn btn-outline-primary btn-bg"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Contact
