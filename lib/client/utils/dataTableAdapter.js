/**
 * Function dataTableAdapter: adapts data format to correct format required to use in Table component
 *
 * @param  {Array} data Json object containing data to display
 *
 * @returns {Array} json object with data correctly formated
 */

const dataTableAdapter = (data) => {
  return data.map((element) => {
    const { name, email, username, phone } = element;
    const city = element.address.city;

    return {
      name,
      email,
      username,
      phone,
      city,
    };
  });
};

export default dataTableAdapter;
