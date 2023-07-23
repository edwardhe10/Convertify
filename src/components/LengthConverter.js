import React, { useState } from "react";

const LengthConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("inches");
  const [result, setResult] = useState("");

  const lengthUnits = ["meters", "centimeters", "inches", "feet"];

  const convertLength = () => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) {
      setResult("Invalid Input");
      return;
    }

    let output;
    switch (fromUnit) {
      case "meters":
        output = input;
        break;
      case "centimeters":
        output = input / 100;
        break;
      case "inches":
        output = input / 39.3701;
        break;
      case "feet":
        output = input / 3.28084;
        break;
      default:
        output = "Invalid unit";
    }

    switch (toUnit) {
      case "meters":
        setResult(output + " " + toUnit);
        break;
      case "centimeters":
        setResult(output * 100 + " " + toUnit);
        break;
      case "inches":
        setResult(output * 39.3701 + " " + toUnit);
        break;
      case "feet":
        setResult(output * 3.28084 + " " + toUnit);
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
      <div className="heading">Length Converter</div>
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
        {lengthUnits.map((unit) => (
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
        {lengthUnits.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <div>
        <button onClick={convertLength}>Convert</button>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default LengthConverter;
