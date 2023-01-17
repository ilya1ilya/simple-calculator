import React from "react";
import "./Keypad.css";

type KeypadProps = {
  result: string;
  setResult: (value: string) => void;
};

const Keypad = ({ result, setResult }: KeypadProps) => {
  
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    let target = e.target as HTMLButtonElement;
    setResult(result + target.name);
  }

  function clear() {
    setResult("");
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    try {
      setResult(String(eval(result)));
    } catch {
      alert("Invalid operation!");
    }
  }

  return (
    <>
      <div className="keypad">
        <button id="clear" className="blue-color" onClick={clear}>
          Clear
        </button>
        <button id="backspace" className="blue-color" onClick={backspace}>
          C
        </button>
        <button name="/" className="blue-color" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" className="blue-color" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" className="blue-color" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" className="blue-color" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button id="result" className="blue-color" onClick={calculate}>
          =
        </button>
      </div>
    </>
  );
};

export default Keypad;
