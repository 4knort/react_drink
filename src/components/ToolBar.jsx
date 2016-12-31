import React from 'react';
import { connect } from 'react-redux';
import * as waterActions from '../actions/waterActions';

const ToolBar = ( { addWater, reset, inputChange, inputNumber, volume }) => {

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="toolbar">
          <button onClick = {() => addWater(300)}>
            <span> add 300 ml</span>
          </button>
          &nbsp;
          <button onClick = {() => addWater(600)}>
            <span> add 600 ml</span>
          </button>
          &nbsp;
          <input  type="text" value={inputNumber} onChange={(event) => inputChange(parseInt(event.target.value,10))} />
          <button onClick = {() => {
            addWater(inputNumber);
          }}>
            <span> add </span>
          </button>
          &nbsp;
          <button onClick = {reset}>
            <span> reset </span>
          </button>
        </div>
        <p>
          Current volume is {volume} ml
        </p>
      </div>
    </div>
  );
};

export default connect(state => ({
  volume: state.water.volume,
  inputNumber: state.water.inputNumber,
}), waterActions)(ToolBar);