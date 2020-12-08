import React from 'react';

import PropTypes from 'prop-types';

import './termschart.css';

/**
 * Termschart comoponent: Displays dynamic terms chart from array data input, heach term value is displayed with a 'TERM #' label
 * acording with data position.
 * Expample: termsData = [22, 36.1] --> renders TERM 1    22
 *                                              TERM 2    36.1
 *
 * @props  {Array}    termsData       Array of numbers with data to diplay in termchart
 */

const Termschart = ({ termsData = [] }) => {
  return (
    <>
      {termsData.map((term, index) => {
        return (
          <div className="term-wrapper" key={index}>
            <span className="term-header">{`Term ${index + 1}`}</span>
            <span className="term-value">{term}</span>
          </div>
        );
      })}
    </>
  );
};

Termschart.propTypes = {
  termsData: PropTypes.array,
};

export default Termschart;
