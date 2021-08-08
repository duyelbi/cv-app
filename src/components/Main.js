import React from 'react';

import Home from "./home/Home";
import About from "./about/About";
import Facts from "./facts/Facts";
import Services from "./services/Services";
import Video from "./video/Video";

const Main = () => {
    return (
        <div className="main">
            <Home />
            <About />
            <Facts />
            <Services />
            <Video />
        </div>
    )
}

export default Main;
