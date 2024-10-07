import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '48cfa96295msh6cbf1f62b6dd92bp1f4ca6jsn12e3acc825cf',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
