import React from 'react';
import Progress from './Progress';

const containerStyle = {
  width: '250px',
};
const circleContainerStyle = {
  width: '250px',
  height: '250px',
  display: 'inline-block',
};

const Usage = () => (
  <div>
    <h3>Line Progress 10%</h3>
    <div style={containerStyle}>
      <Progress type="line" percent={10} strokeWidth={3} strokeColor="red" trailColor="black" />
    </div>
    <h3>Circle Progress 40%</h3>
    <div style={circleContainerStyle}>
      <Progress type="circle" percent={40} strokeWidth={3} strokeColor="green" />
    </div>
  </div>
);

export default Usage;
