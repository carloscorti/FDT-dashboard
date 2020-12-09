import { useEffect, useState } from 'react';

import fetchData from '../network/fetchData';
import dataTableAdapter from '../utils/dataTableAdapter';
import headersFromTableData from '../utils/headersFromTableData';
import pagination from '../utils/pagination';

/**
 * React custom Hook useOverviewPage: handles OverviewPage state
 *
 * @param  {number} tableSize   numbers of rows tables to display
 *
 * @return {Object} object containing
 *                      totaleElements: total elements fetched
 *                      headers: table headers to display
 *                      elementsToDisplay: table elements to display according to pagination settings
 *                      currentPage: current pagination page
 *                      setCurrentPage: function to change currentPage state
 */

const useOverviewPage = (tableSize) => {
  const [totaleElements, setTotalElements] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [elementsToDisplay, setElementsToDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      const data = await fetchData(
        'https://jsonplaceholder.typicode.com/users'
      );
      const tableData = dataTableAdapter(data);
      setTotalElements(tableData);
      setHeaders(headersFromTableData(tableData));
      setElementsToDisplay(pagination(tableSize, currentPage, tableData));
    })();
  }, []);

  useEffect(() => {
    if (totaleElements.length) {
      setElementsToDisplay(pagination(tableSize, currentPage, totaleElements));
    }
  }, [currentPage]);

  return {
    totaleElements,
    headers,
    elementsToDisplay,
    currentPage,
    setCurrentPage,
  };
};

export default useOverviewPage;
