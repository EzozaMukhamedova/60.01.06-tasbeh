import { useState } from "react";
import "./App.css";

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
    <div className="app">
      <p className="count">{count}</p>
      <button onClick={addCount}>+</button>
      <button onClick={ayCount}>Ayirish</button>
      <button onClick={resCount}>Boshidan</button>
    </div>
  );
}

export default App;

