import React, { useState } from "react";

import Input from "../Input";
import Keypad from "../Keypad";

import "./Calculator.css";

const Calculator = () => {
  let [result, setResult] = useState<string>("");

  return (
    <>
      <div className="calculator-container">
        <Input result={result} />
        <Keypad result={result} setResult={setResult} />
      </div>
    </>
  );
};

export default Calculator;
