import axios from "axios";
const url = " http://localhost:3001/home";

export const getStationDetails = () => axios.get(`${url}/stations`);
export const getSingleStation = (paramas) =>
  axios.get(`${url}/stations/${paramas}`);
