import React from 'react';

const StrikethroughIcon = ({ width, height, color }) => (
  <svg 
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill={"none"}
    viewBox={`0 0 ${width} ${height}`}>
      <path d="M18.8754 7.0984H10.976C10.6268 7.0045 10.276 6.91666 9.92372 6.83493C7.7153 6.31271 6.46638 5.93049 6.46638 4.14283C6.44845 3.83424 6.49414 3.52525 6.60061 3.23504C6.70709 2.94484 6.87208 2.67962 7.08533 2.45585C7.75336 1.9065 8.5901 1.60379 9.45498 1.59859C11.6807 1.54354 12.707 2.29855 13.5462 3.4468L14.8164 2.51877C14.2218 1.66494 13.4113 0.98424 12.4675 0.54622C11.5238 0.1082 10.4807 -0.0714418 9.44475 0.0256471C8.17225 0.0337714 6.9447 0.497172 5.98427 1.33198C5.62025 1.70123 5.33573 2.14113 5.14826 2.62456C4.96078 3.10799 4.87433 3.6247 4.89422 4.14283C4.85973 4.70979 4.96623 5.27646 5.20421 5.79221C5.44218 6.30796 5.80422 6.75672 6.25797 7.0984H0V8.67134H10.7369C12.2839 9.11963 13.2088 9.7032 13.2324 11.3123C13.258 11.656 13.2108 12.0013 13.094 12.3256C12.9772 12.6499 12.7934 12.9459 12.5545 13.1943C11.7222 13.8504 10.6883 14.1975 9.62879 14.1767C8.838 14.1537 8.06278 13.9513 7.36175 13.5846C6.66073 13.218 6.05227 12.6967 5.58238 12.0603L4.37672 13.0701C4.9876 13.8842 5.77578 14.5485 6.68153 15.0128C7.58727 15.477 8.58682 15.729 9.60441 15.7496H9.68306C11.1355 15.7663 12.5452 15.2583 13.6532 14.319C14.0464 13.9225 14.3521 13.448 14.5506 12.926C14.749 12.4041 14.8358 11.8463 14.8054 11.2887C14.8347 10.3349 14.5129 9.40354 13.9009 8.67134H18.8754V7.0984Z" fill={color} />
  </svg>
);

export default StrikethroughIcon;