import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { getSingleStation } from "../../Api";
import Map from "./Map";

interface StationDetails {
  Fid: number;
  Id: number;
  Nimi: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Kapasiteet: number;
  x: number;
  y: number;
}

interface Station {
  stationListDetails: StationDetails;
  departureJourneys: number;
  returnJourneys: number;
  averageDepartureDistance: number;
  averageReturnDistance: number;
}

const SingleStation: React.FC = () => {
  const [station, setStation] = useState<Station | null>(null);
  const { singlestation } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getSingleStation(singlestation);
      setStation(data);
    };

    fetchData();
  }, [singlestation]);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {!station ? (
        <CircularProgress />
      ) : (
        <div className="container mt-5">
          <h2 className="text-center mb-5">
            {station.stationListDetails.Nimi}
          </h2>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Info</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Station Id</td>
                <td>{station.stationListDetails.Id} </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  {station.stationListDetails.Adress}{" "}
                  {station.stationListDetails.Kaupunki}
                </td>
              </tr>
              <tr>
                <td>Bike Capacity</td>
                <td>{station.stationListDetails.Kapasiteet}</td>
              </tr>
              <tr>
                <td>Departure Journeys</td>
                <td>{station.departureJourneys}</td>
              </tr>
              <tr>
                <td>Return Journeys</td>
                <td>{station.returnJourneys}</td>
              </tr>
              <tr>
                <td>Average Departure Distance</td>
                <td>{station.averageDepartureDistance.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Average Return Distance</td>
                <td>{station.averageReturnDistance.toFixed(2)}</td>
              </tr>
            </tbody>

            <p> **This data is based on 2.10.2022</p>
          </table>

          <Map
            x={station.stationListDetails.x}
            y={station.stationListDetails.y}
          />
        </div>
      )}
    </Box>
  );
};

export default SingleStation;
