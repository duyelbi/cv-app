import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

import Background_video from "../../assets/images/background_video.jpg";

const styles = {
  about_movie: {
    backgroundImage: `url(${Background_video})`,
  },
};

const Video = () => {
    return (
      <div
        className="section about_movie text-center d-flex flex-column align-items-center backgound-section"
        style={styles.about_movie}
      >
        <div className="video-area">
          <a 
            href="https://www.youtube.com/watch?v=YjhrligRTbE"
            className="btn-video-play iframe_popup"
          >
            <FontAwesomeIcon
              icon={faPlay}
              style={{ color: "rgb(26, 123, 183)" }}
            />
          </a>
          <p className="mt-3">Play Video</p>
        </div>
      </div>
    );
}

export default Video
