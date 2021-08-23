import React from 'react';

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

const Main = () => {
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
        </div>
    )
}

export default Main;
