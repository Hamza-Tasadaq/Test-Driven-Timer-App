import React from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";

const App: React.FC = () => {
  return (
    <div data-testid="App" className="App">
      <Timer />
    </div>
  );
};

export default App;
