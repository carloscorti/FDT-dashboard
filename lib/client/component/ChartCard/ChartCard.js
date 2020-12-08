import React from 'react';

import PropTypes from 'prop-types';

import Barchart from '../Barchart/Barchart';
import Donutchart from '../Donutchart/Donutchart';

import './chartsCard.css';

/**
 * ChartCard comoponent: Displays dynamic Chart card with Barchart and Donutchar components
 *
 * @props  {string}    title          card title
 * @props  {Number}    followers      number of follower to display as header
 * @props  {String}    color          selected color for barchart from avaiable list (ligthBlue, pink, green, red)
 * @props  {Onject}    barsData       object with data to diplay in barchart, data sahepe required {label: barPercentage}
 *                                    label as char is recomended, example {a: 30, b: 25, ...}
 *                                    is rquired
 * @props  {Number}    percentage      number of follower to display as header
 *
 */

const ChartCard = ({
  title = 'title',
  followers = 1,
  color,
  barsData = {},
  donutPercentage = 60,
}) => {
  return (
    <>
      <h3>{title}</h3>

      <div className="chartsarea">
        {/* bar chart */}
        <Barchart followers={followers} color={color} barsData={barsData} />

        {/* donut chart */}
        <div className="circlechart">
          <Donutchart color={color} percentage={donutPercentage} />
        </div>
      </div>
    </>
  );
};

ChartCard.propTypes = {
  title: PropTypes.string,
  followers: PropTypes.number,
  color: PropTypes.string,
  barsData: PropTypes.object.isRequired,
  donutPercentage: PropTypes.number,
};

export default ChartCard;
