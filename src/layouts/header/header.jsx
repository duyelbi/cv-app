import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <header className="header-wraper">
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development"]}
          typedSpeed={80}
          backSpeed= {120}
          loop
        />
        <h1 className="test">Duy Elbi</h1>
        <a href="#" className="btn-main-offer">Learn More</a>
      </div>
    </header>
  );
}

export default Header;
