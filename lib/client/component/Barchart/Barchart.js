import React from 'react';

import PropTypes from 'prop-types';

import './barchart.css';

const colors = {
  ligthBlue: 'rgb(0, 120, 255)',
  pink: 'rgb(240, 29, 113)',
  green: 'rgb(72, 202, 68)',
  red: 'rgb(231, 8, 8)',
};

/**
 * Barchart comoponent: Displays dynamic barchart from object data imput {label: barPercentage} shaped, with numbers of followers as header,
 * customisable chart color from avaiable list (ligthBlue, pink, green, red)
 * Note: label values in json barsData inout as char are kindly recommended
 *
 * @props  {Number}    followers      number of follower to display as header
 * @props  {String}    color          selected color for barchart from avaiable list (ligthBlue, pink, green, red)
 * @props  {Object}    barsData       object with data to diplay in barchart, data sahepe required {label: barPercentage}
 *                                    label as char is recomended, example {a: 30, b: 25, ...}
 *                                    is rquired
 */

const Barchart = ({ followers, color, barsData = {} }) => {
  const labels = Object.keys(barsData);

  const columnsNumbrerSetup = {
    gridTemplateColumns: `repeat(${labels.length}, minmax(1px, 1fr))`,
  };

  return (
    <div className="barchart">
      <p className="barchart-header">
        <b className="higlated-number">{followers}</b> Followers
      </p>
      <div className="barchart-wrapper" style={columnsNumbrerSetup}>
        {labels.map((label) => {
          return (
            <div className="column-flex" key={label}>
              <div
                className="chart-column"
                style={{
                  height: `${barsData[label]}%`,
                  backgroundColor: `${colors[color]}`,
                }}
              ></div>
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Barchart.propTypes = {
  followers: PropTypes.number,
  color: PropTypes.string,
  barsData: PropTypes.object.isRequired,
};

export default Barchart;
