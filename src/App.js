import "./App.css";

import Particles from 'react-particles-js';

import Navbar from "./components/Navbar/Navbar";
import Header from "./layouts/header/header";

function App() {
  return (
    <div className="App">
      <Particles className="paticles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              },
              shape: {
                type: "circle",
                stroke: {
                  width:6,
                  color: "#ffffff"
                }
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
