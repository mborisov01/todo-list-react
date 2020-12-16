import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const { counter, countState } = useState();
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          countState(counter + 1);
        }}
      >
        sss
      </button>
    </div>
  );
}
