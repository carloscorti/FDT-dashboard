import React from 'react';

import PropTypes from 'prop-types';

import './pagination.css';

/**
 * Pagination comoponent: Displays pagination footer from elementsPerPage and totalDataElements, if handlePagination provided
 * executes pagination logic onClickForward and onClickBackward
 *
 * @props  {Number}       elementsPerPage     elements per page
 * @props  {Number}       totalDataElements   total elements to paginate
 * @props  {Number}       currentPage         pagination current page
 * @props  {Funcation}    handlePagination    logic to apply pagination
 */

const Pagination = ({
  elementsPerPage,
  totalDataElements,
  currentPage,
  handlePagination,
}) => {
  const totalPages = Math.ceil(totalDataElements / elementsPerPage);

  const onClickForward = () => {
    if (currentPage < totalPages) {
      handlePagination(currentPage + 1);
    }
  };

  const onClickBackward = () => {
    if (currentPage > 1) {
      handlePagination(currentPage - 1);
    }
  };

  return (
    <div className="overview-pagination-flex">
      <p>
        Showing <b>{(currentPage - 1) * elementsPerPage + 1}</b> to{' '}
        <b>
          {totalPages === currentPage
            ? totalDataElements
            : currentPage * elementsPerPage}
        </b>{' '}
        of <b>{`${totalDataElements} elements`}</b>
      </p>
      <p>
        Page <button onClick={onClickBackward}>{currentPage}</button> ...
        {totalPages === currentPage ? (
          <button>-</button>
        ) : (
          <button onClick={onClickForward}>{currentPage + 1}</button>
        )}
      </p>
    </div>
  );
};

Pagination.propTypes = {
  elementsPerPage: PropTypes.number.isRequired,
  totalDataElements: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func,
};

export default Pagination;
