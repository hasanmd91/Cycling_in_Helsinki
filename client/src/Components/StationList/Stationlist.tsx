import { CircularProgress, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { getStationDetails } from "../../Api/index";
import { Link } from "react-router-dom";
import { ChangeEvent } from "react";

// Define the interface for the station data
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

// The Stationlist component,  displays a list of station data
const Stationlist: React.FC<props> = () => {
  const [stationList, setStationList] = useState<Stations[]>([]);
  const [search, setSearch] = useState<string>("");

  //Use effect hook & Async function to fetch the station details from the API

  useEffect(() => {
    const getStationList = async () => {
      const { data } = await getStationDetails();
      setStationList(data);
    };
    getStationList();
  }, []);

  // Function to filter the station list based on the search input value

  const filterdata = stationList.filter((station) =>
    station.Nimi.toLowerCase().includes(search.toLowerCase())
  );
  // If there is no data yet, show a loading spinner
  if (!stationList.length) {
    return <CircularProgress />;
  }
  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Search
        </span>
        <input
          placeholder=" Enter Station Name"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value as string)
          }
        />
      </div>

      {/* Table to display the station list */}
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
          {filterdata.map((station, index) => (
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
