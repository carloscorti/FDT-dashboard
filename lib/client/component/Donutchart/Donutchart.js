import React from 'react';

import PropTypes from 'prop-types';

import './donutchart.css';

const colors = {
  ligthBlue: 'rgb(0, 120, 255)',
  pink: 'rgb(240, 29, 113)',
  green: 'rgb(72, 202, 68)',
  red: 'rgb(231, 8, 8)',
};

/**
 * Donutchart comoponent: Displays dynamic donutchart from percentage data imput,
 * customisable chart color from avaiable list (ligthBlue, pink, green, red)
 *
 * @props  {Number}    percentage      number of follower to display as header
 * @props  {String}    color           selected color for barchart from avaiable list (ligthBlue, pink, green, red)
 *
 */

const Donutchart = ({ percentage, color }) => {
  const percentageSetup = {
    strokeDashoffset: `calc(300 - (300 * ${percentage}) / 100)`,
  };

  const colorSetup = {
    stroke: `${colors[color]}`,
  };

  return (
    <>
      <svg>
        <circle style={colorSetup} cx="0" cy="0" r="3rem"></circle>
        <circle
          style={{ ...percentageSetup, ...colorSetup }}
          scx="0"
          cy="0"
          r="3rem"
        ></circle>
      </svg>
    </>
  );
};

Donutchart.propTypes = {
  percentage: PropTypes.number,
  color: PropTypes.string,
};

export default Donutchart;
