import { useState } from "react";
import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <div className="container">
        <div>
          <button
            id="buttonOn1"
            onClick={() => {
              setSwitch1(true);
            }}
            className="unclickedButton"
          >
            ON
          </button>

          <button
            id="buttonOff1"
            onClick={() => {
              setSwitch1(false);
            }}
            className="clickedButton"
          >
            OFF
          </button>
          {setSwitch1 && x}
        </div>

        <div>
          <button className="unclickedButton">ON</button>
          <button className="clickedButton">OFF</button>
        </div>
        <div>
          <button className="unclickedButton">ON</button>
          <button className="clickedButton">OFF</button>
        </div>
      </div>
      <p className="no"> No way !</p>
    </>
  );
}

export default App;
