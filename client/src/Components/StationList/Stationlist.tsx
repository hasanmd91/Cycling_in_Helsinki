import { Box, CircularProgress, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { getStationDetails } from "../../Api/index";
import { Link } from "react-router-dom";

export interface Stations {
  Fid: number;
  Id: number;
  Nimi: String;
  Osoite: String;
  Adress: String;
  kaupunki: String;
  Kapasiteet: number;
  x: number;
  y: number;
}

interface props {}

const Stationlist: React.FC<props> = () => {
  const [stationList, setStationList] = useState<Stations[]>([]);

  const getStationList = async () => {
    const { data } = await getStationDetails();
    setStationList(data);
  };

  useEffect(() => {
    getStationList();
  }, []);

  if (!stationList.length) {
    return <CircularProgress />;
  }
  return (
    <div className="container mt-5">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col"> Fid</th>

            <th scope="col">Station Id </th>
            <th scope="col"> Station Name </th>
            <th scope="col"> Address</th>
            <th scope="col"> Capcity</th>
            <th scope="col"> X Coordinate </th>
            <th scope="col"> Y Coordinate</th>
          </tr>
        </thead>
        <tbody>
          {stationList.map((station, index) => (
            <tr key={index}>
              <td>{station.Fid}</td>
              <td>{station.Id}</td>
              <td>
                <Link style={{ textDecoration: "none" }} to={`${station.Nimi}`}>
                  {station.Nimi}
                </Link>
              </td>
              <td>{station.Osoite}</td>
              <td>{station.Kapasiteet}</td>
              <td>{station.x}</td>
              <td>{station.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: "10px", margin: "5px" }}>
        @Data source Helsinki City Bike, covers the period of May to July 2021.
      </p>
    </div>
  );
};

export default Stationlist;
