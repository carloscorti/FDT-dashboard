/**
 * Function headersFromTableData: sets headers data from given data set to correct format required in Table component
 *
 * @param  {Array} data Json object containing data to display
 *
 * @returns {Array} json object with data correctly formated
 */

const headersFromTableData = (tableData) => {
  return (
    Object.keys(tableData[0]).map((element) => {
      return {
        key: element,
        label: element,
      };
    }) || []
  );
};

export default headersFromTableData;
