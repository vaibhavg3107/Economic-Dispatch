import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import WithoutLosses from "./Components/WithoutLosses";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <WithoutLosses />
      <div id="team">
        <h></h>
      </div>
    </>
  );
}

export default App;
