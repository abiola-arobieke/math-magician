import React, { useState } from 'react';
import CalcScreen from './calcScreen';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

function Calculator() {
  const [oldState, newState] = useState({ result: '0', num: '0', sign: '' });
  const handleClick = (e) => {
    const val = calculate(oldState, e.target.name);
    newState(val);
  };

  const handleClear = () => {
    newState({
      result: '0',
      num: '0',
      sign: null,
    });
  };

  const handleSign = (e) => {
    newState({
      result: oldState.result,
      num: oldState.num,
      sign: e.target.name,
    });
  };

  const handleEvaluation = () => {
    const ans = operate(oldState.result, oldState.num, oldState.sign);
    const finalAns = ans.c.join('');
    newState({
      result: '0',
      num: finalAns,
      sign: '',
    });
  };

  return (
    <section>
      <div className="grid-container">
        <CalcScreen answer={oldState.num} />
        <div className="grid-item">
          <button
            onClick={handleClear}
            name="ac"
            className="calc-btn bg-light-gray"
            type="button"
          >
            AC
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleSign}
            name="-"
            type="button"
          >
            +/-
          </button>
        </div>
        <div className="grid-item">
          <button
            className="calc-btn bg-light-gray"
            onClick={handleSign}
            name="%"
            type="button"
          >
            %
          </button>
        </div>
        <div className="grid-item">
          <button
            onClick={handleSign}
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
            onClick={handleSign}
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
            onClick={handleSign}
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
            onClick={handleSign}
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
            onClick={handleEvaluation}
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
