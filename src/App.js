import "./App.css";

import Particles from "react-particles-js";

import Header from "./layouts/header/header";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Particles
        className="particles-cavas"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <Header />
      <Home />
    </div>
  );
}

export default App;
