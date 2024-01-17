import React from 'react';

const ItalicsIcon = ({ width, height, color }) => (
  <svg 
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill={"none"}
    viewBox={`0 0 ${width} ${height}`}>
      <path d="M15.75 1.75V0H4.375V1.75H8.8725L5.04875 14H0V15.75H11.375V14H6.8775L10.7012 1.75H15.75Z" fill={color}/>
  </svg>
);

export default ItalicsIcon;