import React from 'react'

const colorSwitcher = () => {
    return (
      <div id="color-switcher" className="d-flex flex-row">
        <div className="switcher-area">
          <h3 className="mb-4 mt-2">Choose your color</h3>
          <ul className="list-inline m-auto">
            <li className="list-inline-item">
              <a
                href="#"
                className="swtich-color color1 active"
                data-path="./assets/css/default.css"
              ></a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="swtich-color color2"
                data-path="./assets/css/blue.css"
              ></a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="swtich-color color3"
                data-path="./assets/css/violet.css"
              ></a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="swtich-color color4"
                data-path="./assets/css/green.css"
              ></a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="swtich-color color5"
                data-path="./assets/css/pink.css"
              ></a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="swtich-color color6"
                data-path="./assets/css/red.css"
              ></a>
            </li>
          </ul>
        </div>
        <div className="switcher-button">
          <i className="fas fa-cog"></i>
        </div>
      </div>
    );
}

export default colorSwitcher
