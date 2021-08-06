import React from "react";
import Typed from "react-typed";

function Home() {
  return (
    <section className="header-wraper home d-flex" id="home">
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development"]}
          typedSpeed={100}
          backSpeed= {100}
          loop
        />
        <h1>
          Duy Elbi
        </h1>
        <a href="#about" className="btn-main-offer">Learn More</a>
        <div className="scroll-down">
        <a href="#about" className="scroll-down-link text-center hoveroff">
          <div className="scroll-title">Scroll Down</div>
          <div className="scroll-mouse">
            <div className="well"></div>
          </div>
        </a>
      </div>
      </div>
    </section>
  );
}

export default Home;
