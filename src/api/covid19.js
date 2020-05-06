import axios from 'axios';

const axiosBase = axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
  responseType: 'json',
});

const CovidAPI = {
  post: (url, data, config) => axiosBase.post(url, data, config),
  get: (url, config) => axiosBase.get(url, config),
};

export default CovidAPI;
