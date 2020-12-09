import axios from 'axios';

/**
 * Function fetchData: hadles http requests
 *
 * @param  {string} url   url to fetch data
 *
 * @return {Array} json data fetched
 */

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.info(e.message);
    console.info(e);
    return [];
  }
};

export default fetchData;
