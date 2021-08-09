import React from 'react';

import Home from "./home/Home";
import About from "./about/About";
import Facts from "./facts/Facts";
import Services from "./services/Services";
import Video from "./video/Video";
import Portfolio from "./portfolio/Portfolio";
import Project from "./project/Project";
import Resume from "./resume/Resume";
import Client from "./client/Client";
import Blog from "./blog/Blog";

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
        </div>
    )
}

export default Main;
