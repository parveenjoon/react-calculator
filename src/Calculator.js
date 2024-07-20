// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateInput = () => {
    if (num1.trim() === '' && num2.trim() === '') {
      setError('Both fields are required.');
      return false;
    }
    if (num1.trim() === '') {
      setError('Num1 cannot be empty.');
      return false;
    }
    if (num2.trim() === '') {
      setError('Num2 cannot be empty.');
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError('Both inputs must be valid numbers.');
      return false;
    }

    setError('');
    return true;
  };

  const handleCalculation = (operation) => {
    if (!validateInput()) return;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;

    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'subtract':
        res = n1 - n2;
        break;
      case 'multiply':
        res = n1 * n2;
        break;
      case 'divide':
        if (n2 === 0) {
          setError('Division by zero is not allowed.');
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Num 1"
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Num 2"
      />
      <div className="buttons">
        <button onClick={() => handleCalculation('add')}>+</button>
        <button onClick={() => handleCalculation('subtract')}>-</button>
        <button onClick={() => handleCalculation('multiply')}>*</button>
        <button onClick={() => handleCalculation('divide')}>/</button>
      </div>
      {error && (
        <div className="error">
          <strong>Error!</strong>
          <div>{error}</div>
        </div>
      )}
      {result !== null && !error && (
        <div className="success">
          <strong>Success!</strong>
          <div>Result: {result}</div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
