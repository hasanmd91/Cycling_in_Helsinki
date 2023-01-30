import axios from "axios";
const url = " http://localhost:3001";

export const getJourneyDetails = (page, limit) => {
  axios.get(`${url}/?page=${page}&perPage=${limit}`);
};

export const getStationDetails = () => axios.get(`${url}/stations`);
