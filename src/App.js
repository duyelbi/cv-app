import "./App.css";

import Particles from "react-particles-js";

import Header from "./layouts/header/Header";
import Main from "./components/Main";

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
      <Main />
    </div>
  );
}

export default App;
