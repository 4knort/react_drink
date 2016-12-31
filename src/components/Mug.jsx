import React from 'react';
import { connect } from 'react-redux';
import * as waterActions from '../actions/waterActions';

const Mug = ( { volume }) => {
  
  const colorIndicator = () => {
    if (volume <= 1000) {
      return {
        height: volume / 10,
        backgroundColor: "red",
      } 
    } else if (volume >= 1000 && volume <= 2500) {
      return {
        height: volume / 10,
        backgroundColor: "yellow",
      }
    } else {
      return {
        height: "250px",
        backgroundColor: "green",
      }
    }
  }

let mugStyles = colorIndicator();

  return (
      <div className="clearfix mug-wrap">
        <div className="mug">
          <div className="mug-water" style={mugStyles}></div>
        </div>
        <ul className="mug-volume">
          <li>2500ml</li>
          <li>2000ml</li>
          <li>1500ml</li>
          <li>1000ml</li>
          <li>500ml</li>
          <li>0ml</li>           
        </ul>
      </div>
  );
};

export default connect(state => ({
  volume: state.water.volume,
}), waterActions)(Mug);