import axios from "axios";
const url = " http://localhost:3001";

export const getStationDetails = () => axios.get(`${url}/stations`);
