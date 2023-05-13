import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNum1 = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2 = (e) => {
    setNum2(e.target.value);
  };

  const handleOperation = (e) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) && isNaN(number2)) {
      setError("Error : Please enter both the values ");
      setResult("");
    } else if (isNaN(number2)) {
      setError("Error : Please enter Num2 value");
      setResult("");
    } else if (isNaN(number1)) {
      setError("Error : Please enter Error : Num1 values");
      setResult("");
    } else {
      let result;
      switch (operation) {
        case "+":
          result = number1 + number2;
          break;
        case "-":
          result = number1 - number2;
          break;
        case "*":
          result = number1 * number2;
          break;
        case "/":
          result = number1 / number2;
          break;
        default:
          result = "";
          break;
      }
      setResult(`Result : ` + Number(result).toFixed(2));
      setSuccess("Success : Your result is shown above!");
      setError("");
      setOperation(e.target.value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>React Calculator</h1>
        <input
          type="number"
          value={num1}
          onChange={handleNum1}
          placeholder="Num1"
        />
        <br />
        <br />
        <input
          type="number"
          value={num2}
          onChange={handleNum2}
          placeholder="Num2"
        />
        <br />
        <br />
        <button id="add" value="+" onClick={handleOperation}>
          +
        </button>
        <button id="sub" value="-" onClick={handleOperation}>
          -
        </button>
        <button id="multi" value="*" onClick={handleOperation}>
          *
        </button>
        <button id="divide" value="/" onClick={handleOperation}>
          /
        </button>

        <p id="result">{result}</p>
        <p id="error">{error}</p>
        <p id="success">{success}</p>
      </div>
    </div>
  );
}

export default App;
