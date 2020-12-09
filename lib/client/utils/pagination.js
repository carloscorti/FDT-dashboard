/**
 * Function pagination: handles pagination logic
 *
 * @param  {Number} limit data size reqiured
 * @param  {Number} page  position required to begin from
 * @param  {Array}  data  Json object containing data to display
 *
 * @returns {Array} data slice required
 */

const pagination = (limit, page, data) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return data.slice(startIndex, endIndex);
};

export default pagination;
