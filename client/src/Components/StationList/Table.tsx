import React from "react";
import { Paper } from "@mui/material";
import { Stations } from "./Stationlist";
import { Link } from "react-router-dom";

interface props {
  stationList: Stations[];
}

const Table: React.FC<props> = ({ stationList }) => {
  stationList.map((s) => console.log(s));

  return (
    <Paper>
      <table className="table table-striped">
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
    </Paper>
  );
};

export default Table;
