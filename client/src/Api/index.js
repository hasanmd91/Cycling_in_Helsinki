import axios from "axios";
const url = " http://localhost:3001/";

export const getJourneyDetails = () => axios.get(url);
export const getStationDetails = () => axios.get(`${url}/stations`);
