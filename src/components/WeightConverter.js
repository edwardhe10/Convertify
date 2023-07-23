import React, { useState } from "react";

const WeightConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kilograms");
  const [toUnit, setToUnit] = useState("pounds");
  const [result, setResult] = useState("");

  const weightUnits = ["kilograms", "grams", "pounds", "ounces"];

  const convertWeight = () => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) {
      setResult("Invalid Input");
      return;
    }

    let output;
    switch (fromUnit) {
      case "kilograms":
        output = input;
        break;
      case "grams":
        output = input / 1000;
        break;
      case "pounds":
        output = input * 0.453592;
        break;
      case "ounces":
        output = input * 0.0283495;
        break;
      default:
        output = "Invalid unit";
    }

    switch (toUnit) {
      case "kilograms":
        setResult(output + " " + toUnit);
        break;
      case "grams":
        setResult(output * 1000 + " " + toUnit);
        break;
      case "pounds":
        setResult(output / 0.453592 + " " + toUnit);
        break;
      case "ounces":
        setResult(output / 0.0283495 + " " + toUnit);
        break;
      default:
        setResult("Invalid unit");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  return (
    <div className="container">
      <div className="heading">Weight Converter</div>
      <label className="label">Enter value</label>
      <input
        type="text"
        className="input-field"
        value={inputValue}
        onChange={handleInputChange}
      />
      <label className="label">From</label>
      <select
        className="select-field"
        value={fromUnit}
        onChange={handleFromUnitChange}
      >
        {weightUnits.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <label className="label">To</label>
      <select
        className="select-field"
        value={toUnit}
        onChange={handleToUnitChange}
      >
        {weightUnits.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <div className="convert-button">
        <button onClick={convertWeight}>Convert</button>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default WeightConverter;
