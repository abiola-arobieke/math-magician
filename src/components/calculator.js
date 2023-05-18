import React, { useState } from 'react';
import CalcScreen from './calcScreen';
import calculate from '../logic/calculate';

function Calculator() {
  const [oldState, newState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleClick = (buttonkey) => {
    newState((oldState) => calculate(oldState, buttonkey));
  };

  const buttonKeys = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];
  return (
    <div className="d-flex mx-10c banner">
      <h2>Let&apos;s do some math</h2>
      <div className="grid-container">
        <CalcScreen answer={oldState} />

        {buttonKeys.map((buttonkey) => (
          <div
            key={buttonkey}
            className={`${buttonkey.match(/[0]+/) ? 'zero-btn' : ''} grid-item`}
          >
            <button
              type="button"
              key={buttonkey}
              className={`${
                buttonkey.match(/[0-9.]+/) ? 'bg-light-gray' : 'bg-brown'
              } calc-btn`}
              onClick={() => handleClick(buttonkey)}
            >
              {buttonkey}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
