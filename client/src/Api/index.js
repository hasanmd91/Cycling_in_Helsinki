import axios from "axios";
const url = " https://helisinkicitybike.onrender.com/home";

export const getStationDetails = () => axios.get(`${url}/stations`);
export const getSingleStation = (paramas) =>
  axios.get(`${url}/stations/${paramas}`);
