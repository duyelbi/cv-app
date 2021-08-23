import React, { useState, useEffect } from "react";

import Home from "./home";
import About from "./about";
import Facts from "./facts";
import Services from "./services";
import Video from "./video";
import Portfolio from "./portfolio";
import Project from "./project";
import Resume from "./resume";
import Client from "./client";
import Blog from "./blog";
import Contact from "./contact";
import ScrollToTop from "./scrollToTop";

const Main = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 800) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
    return (
      <div className="main">
        <Home />
        <About />
        <Facts />
        <Services />
        <Video />
        <Portfolio />
        <Project />
        <Resume />
        <Client />
        <Blog />
        <Contact />
        {showButton && <ScrollToTop />}
        <ScrollToTop />
      </div>
    );
}

export default Main;
