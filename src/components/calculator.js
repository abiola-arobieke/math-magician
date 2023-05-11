import React, { useState } from 'react';
import CalcScreen from './calcScreen';
import calculate from '../logic/calculate';

function Calculator() {
  const [oldState, newState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleClick = (e) => {
    newState((oldState) => calculate(oldState, e.target.name));
  };

  return (
    <section>
      <div className="grid-container">
        <CalcScreen answer={oldState} />
        <div className="grid-item">
          <button
            onClick={handleClick}
            name="AC"
            className="calc-btn bg-light-gray"
            type="button"
          >
            AC
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="-"
            type="button"
          >
            +/-
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="%"
            type="button"
          >
            %
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={handleClick}
            name="+"
            className="calc-btn bg-brown"
            type="button"
          >
            ÷
          </button>
        </div>
        <div className="grid-item bg-light-gray">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="1"
            type="button"
          >
            1
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="2"
            type="button"
          >
            2
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="3"
            type="button"
          >
            3
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-brown"
            onClick={handleClick}
            name="x"
            type="button"
          >
            x
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="4"
            type="button"
          >
            4
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="5"
            type="button"
          >
            5
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="6"
            type="button"
          >
            6
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-brown"
            onClick={handleClick}
            name="-"
            type="button"
          >
            -
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="7"
            type="button"
          >
            7
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="8"
            type="button"
          >
            8
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="9"
            type="button"
          >
            9
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-brown"
            onClick={handleClick}
            name="+"
            type="button"
          >
            +
          </button>
        </div>
        <div className="grid-item zero-btn">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleClick}
            name="0"
            type="button"
          >
            0
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray text-bold"
            onClick={handleClick}
            name="."
            type="button"
          >
            .
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-brown"
            onClick={handleClick}
            name="="
            type="button"
          >
            =
          </button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
