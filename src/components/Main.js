import React from 'react';

import Home from "./home/Home";
import About from "./about/About";
import Facts from "./facts/Facts";
import Services from "./services/Services";
import Video from "./video/Video";
import Portfolio from "./portfolio/Portfolio";

const Main = () => {
    return (
        <div className="main">
            <Home />
            <About />
            <Facts />
            <Services />
            <Video />
            <Portfolio />
        </div>
    )
}

export default Main;
