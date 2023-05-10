import React from 'react';

function Calculator() {
  return (
    <section>
      <div className="grid-container">
        <div className="grid-item display">
          0
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">AC</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">+/-</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">%</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-brown" type="button">÷</button>
        </div>
        <div className="grid-item bg-light-gray">
          <button className="calc-btn bg-light-gray" type="button">1</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">2</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">3</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-brown" type="button">x</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">4</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">5</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">6</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-brown" type="button">-</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">7</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">8</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray" type="button">9</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-brown" type="button">+</button>
        </div>
        <div className="grid-item zero-btn">
          <button className="calc-btn bg-light-gray" type="button">0</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-light-gray text-bold" type="button">.</button>
        </div>
        <div className="grid-item">
          <button className="calc-btn bg-brown" type="button">=</button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
