import React from 'react';

import Home from "./home/Home";
import About from "./about/About";
import Facts from "./facts/Facts";

const Main = () => {
    return (
        <div className="main">
            <Home />
            <About />
            <Facts />
        </div>
    )
}

export default Main;
