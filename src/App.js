import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [text, setText] = useState(null);

  useEffect(() => {
    if (timer % 2 === 0) {
      setText("Even Number");
    } else {
      setText(null);
    }
  }, [timer]);

  let handleButton = (value) => {
    if (value === "i") {
      setTimer((timer) => timer + 1);
      console.log("i", timer);
    } else {
      setTimer((timer) => timer - 1);
      console.log("d", timer);
    }
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      {timer}
      {text ? text : null}
      <br />
      <button onClick={() => handleButton("i")}>Increament</button>
      <button onClick={() => handleButton("d")}>Decrement</button>
    </div>
  );
}
