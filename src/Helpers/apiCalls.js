import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001/api/';
// axios.defaults.baseURL = "https://psychometry-server.onrender.com/api/"
// axios.defaults.baseURL = "https://psychometry-server-production.up.railway.app/api/"

const apiCalls = async (method, url, data={}) => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  // console.log(data);
  try {
    const res = await axios({
      method: method,
      url: url,
      data,
    });

    return res;
  } catch (error) {}
};

export default apiCalls;
