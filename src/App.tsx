// App.js
import React from "react";
import "./App.css";
import CanDataManager from "./controller/CanDataManager";
import Speedometer from "./pages/speedometer";

function App() {
  const [canDataManager] = React.useState(new CanDataManager()); // create a new CanDataManager instance

  return (
    <>
      <h1>Speed</h1>
      <Speedometer canDataManager={canDataManager} />
    </>
  );
}

export default App;
