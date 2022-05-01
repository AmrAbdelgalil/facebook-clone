/** @format */

import React, { useState } from "react";
import "../app.css";
import SignUpPopUp from "./SignUpPopUp";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button className="border-4 w-36" onClick={() => setVisible(!visible)}>
        click me
      </button>
      <SignUpPopUp visible={visible} setvisible={setVisible} />
    </div>
  );
}

export default App;
