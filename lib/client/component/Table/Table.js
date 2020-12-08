import React, { useState } from 'react';

import PropTypes from 'prop-types';

import './table.css';

/**
 * Table comoponent: Displays table from json and headers imputs, on last column (status column) renders a button
 * Note: to diplay data correctly headers key atribute and tableData json element key MUST BE EXACTLY EQUALS
 *
 * @props  {Array}     tableData    json with data to display table, is required
 * @props  {Array}     headers      json with headers data to display grid, value and label keys are required for json elements
 *                                  is reuired
 * @props  {Boolean}   statusNedd   default true, enebles last colomn with STATUS header and a toggle button (Open/Sent) on each row
 */

const Table = ({
  title = 'Title',
  headers = [],
  tableData = [],
  statusNedd = true,
}) => {
  const [openList, setOpenList] = useState([]);

  const onOpenClick = () => {
    // Do onOpenClick
  };

  const onSentClick = () => {
    // Do onSentClick
  };

  const onClickHandler = (event) => {
    switch (event.target.value) {
      case 'sent':
        setOpenList([...openList, Number(event.target.id)]);
        onSentClick();
        break;
      case 'open':
        setOpenList([
          ...openList.filter((index) => index != Number(event.target.id)),
        ]);
        onOpenClick();
        break;
      default:
    }
  };

  return (
    <>
      <h3 className="highlighted-header">{title}</h3>

      <table role="table">
        <thead role="rowgroup">
          <tr role="row">
            {headers.map((header, index) => {
              return <th key={index}>{header.label}</th>;
            })}
            {statusNedd && <th role="columnheader">Status</th>}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {tableData.map((dataElement, rowIndex) => {
            return (
              <tr role="row" key={rowIndex}>
                {headers.map((tablePosition, cellIndex) => {
                  return (
                    <td role="cell" key={cellIndex}>
                      {dataElement[tablePosition.key]}
                    </td>
                  );
                })}
                {statusNedd && (
                  <td role="cell">
                    {openList.includes(rowIndex) ? (
                      <button
                        id={`${rowIndex}`}
                        value={'open'}
                        onClick={onClickHandler}
                        className="open"
                      >
                        Open
                      </button>
                    ) : (
                      <button
                        id={`${rowIndex}`}
                        value={'sent'}
                        onClick={onClickHandler}
                      >
                        Sent
                      </button>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  statusNedd: PropTypes.bool,
};

export default Table;
