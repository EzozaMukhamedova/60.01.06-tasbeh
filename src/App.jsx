import { useState } from "react";
import "./App.css";
import backgroundImage from "./assets/tasbeh3.png";
import { Position } from "monaco-editor";

function App() {
  let [count, setCount] = useState(0);

  function addCount() {
    setCount(++count);
  }

  function ayCount() {
    setCount(--count);
  }

  function resCount() {
    setCount(0);
  }

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "500px",
        height: "500px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "0 auto",
      }}
    >
      <p className="count">{count}</p>
      <button className="add" onClick={addCount}>
        +
      </button>
      <button className="ayrish" onClick={ayCount}>
        Ay
      </button>
      <button className="qoshish" onClick={resCount}>
        Bo
      </button>
    </div>
  );
}

export default App;
