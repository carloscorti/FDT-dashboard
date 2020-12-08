import React from 'react';

import PropTypes from 'prop-types';

import './overviewHeader.css';
import './progressbar.css';

/**
 * OverviewHeader comoponent: Overview header, displays insertions and porcentage as dinamic prograssbar for dynamic values
 *
 * @props  {Number}    insertions     numbers of insertions to display
 * @props  {Number}    progress       percentage of insertions to display
 */

const OverviewHeader = ({ insertions, progress }) => {
  const progressSetup = {
    width: `${progress}%`,
  };

  return (
    <div className="overview-header-flex">
      <h2>Data overview</h2>
      <div className="overview-header-progres-flex">
        <div className="progress">
          <span style={progressSetup}></span>
        </div>
        <span>
          <b>{insertions}</b> insertions needed to complete
        </span>
      </div>
    </div>
  );
};

OverviewHeader.propTypes = {
  insertions: PropTypes.number,
  progress: PropTypes.number,
};

export default OverviewHeader;
