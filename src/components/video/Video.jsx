import React from 'react'

const Video = () => {
    return (
      <div
        className="section about_movie text-center d-flex flex-column align-items-center backgound-section"
        style="background-image: url(./assets/images/background_video.jpg)"
      >
        <div className="video-area">
          <a
            href="https://www.youtube.com/watch?v=YjhrligRTbE"
            className="btn-video-play iframe_popup"
          >
            <i className="fas fa-play"></i>
          </a>
          <p className="mt-3">Play Video</p>
        </div>
      </div>
    );
}

export default Video
