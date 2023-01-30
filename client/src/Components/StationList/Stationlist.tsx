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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      {" "}
      {!stationList.length ? (
        <CircularProgress />
      ) : (
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
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`${station.Nimi}`}
                    >
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
      )}
    </Box>
  );
};

export default Stationlist;
