import React from 'react';
import "./facts.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faSmile,
  faMagic,
  faDownload
} from "@fortawesome/free-solid-svg-icons";

import Background from "../../assets/images/background_2.jpg";

const styles = {
  facts: {
    backgroundImage: `url(${Background})`,
  },
};

const Facts = () => {
    return (
      <div className="section facts backgound-section" style={styles.facts}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div className="fact-single text-center">
                <div className="fact-icon">
                  <FontAwesomeIcon icon={faHistory} style={{ color: "fff" }} />
                </div>
                <div className="fact-info">
                  <span
                    className="tmcounter"
                    data-from="0"
                    data-to="20"
                    data-speed="1500"
                  >
                    20
                  </span>
                  +
                </div>
                <div className="fact-meta">
                  <span>Years Experiance</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div className="fact-single text-center">
                <div className="fact-icon">
                  <FontAwesomeIcon icon={faSmile} style={{ color: "fff" }} />
                </div>
                <div className="fact-info">
                  <span
                    className="tmcounter"
                    data-from="0"
                    data-to="400"
                    data-speed="1500"
                  >
                    400
                  </span>
                  +
                </div>
                <div className="fact-meta">
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div className="fact-single text-center">
                <div className="fact-icon">
                  <FontAwesomeIcon icon={faMagic} style={{ color: "fff" }} />
                </div>
                <div className="fact-info">
                  <span
                    className="tmcounter"
                    data-from="0"
                    data-to="7853"
                    data-speed="1500"
                  >
                    7853
                  </span>
                </div>
                <div className="fact-meta">
                  <span>Projects Done</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
              <div className="fact-single text-center">
                <div className="fact-icon">
                  <FontAwesomeIcon icon={faDownload} style={{ color: "fff" }} />
                </div>
                <div className="fact-info">
                  <span
                    className="tmcounter"
                    data-from="0"
                    data-to="2569"
                    data-speed="1500"
                  >
                    2569
                  </span>
                </div>
                <div className="fact-meta">
                  <span>Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Facts
