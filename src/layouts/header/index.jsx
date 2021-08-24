import React, { useState } from "react";

// import react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Scrollspy from "react-scrollspy";

// css
import "./index.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header
      className={
        navbar
          ? "navbar active navbar-expand-lg navbar-dark bg-dark horizontal_header transparentOnScroll fixed-top"
          : "navbar navbar-expand-lg navbar-dark bg-dark horizontal_header transparentOnScroll fixed-top"
      }
    >
      <div className="container">
        <a className="navbar-brand logo" href="/">
          Rect<span>CV</span>
        </a>
        <button
          className="button-toggler navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon className="faIcon" icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Scrollspy
            items={[
              "home",
              "about",
              "service",
              "portfolio",
              "resume",
              "blog",
              "contact",
            ]}
            currentClassName="is-current"
            className="navbar-nav ms-auto"
          >
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </header>
  );
};

export default Header;
