import { useState } from "react";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <>
      <main>
        <div className="container">
          <div className="divButtons">
            <button
              onClick={() => {
                setSwitch1(true);
              }}
              className={switch1 ? "clickedButton" : "unclickedButton"}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch1(false);
              }}
              className={!switch1 ? "clickedButton" : "unclickedButton"}
            >
              OFF
            </button>
          </div>
          <div className="divButtons">
            <button
              onClick={() => {
                setSwitch2(true);
              }}
              className={switch2 ? "clickedButton" : "unclickedButton"}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch2(false);
              }}
              className={!switch2 ? "clickedButton" : "unclickedButton"}
            >
              OFF
            </button>
          </div>
          <div className="divButtons">
            <button
              onClick={() => {
                setSwitch3(true);
              }}
              className={switch3 ? "clickedButton" : "unclickedButton"}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch3(false);
              }}
              className={!switch3 ? "clickedButton" : "unclickedButton"}
            >
              OFF
            </button>
          </div>
        </div>
        <div className="container2">
          {switch1 && switch2 && switch3 ? (
            <p className="go"> GO !</p>
          ) : (
            <p className="no">No Way !</p>
          )}
          <button
            onClick={() => {
              setSwitch1(false);
              setSwitch2(false);
              setSwitch3(false);
            }}
          >
            STOP
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
