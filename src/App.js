import "./App.css";
import React, { useState } from "react";
import WeightConverter from "./components/WeightConverter";
import LengthConverter from "./components/LengthConverter";

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="app-container">
      <h1>Measurement Converter</h1>
      <div className="tabs-container">
        <button
          className={selectedTab === 0 ? "active-tab" : "tab-button"}
          onClick={() => handleTabChange(0)}
        >
          Weight
        </button>
        <button
          className={selectedTab === 1 ? "active-tab" : "tab-button"}
          onClick={() => handleTabChange(1)}
        >
          Length
        </button>
      </div>
      <div className="converter-container">
        {selectedTab === 0 ? <WeightConverter /> : <LengthConverter />}
      </div>
    </div>
  );
};

export default App;
