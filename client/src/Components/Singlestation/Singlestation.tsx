import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getSingleStation(singlestation);
      setStation(data);
    };

    fetchData();
  }, [singlestation]);

  return (
    <Box sx={{ minHeight: "100vh", padding: "10px" }}>
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
          </table>
          <p style={{ fontSize: "10px", marginTop: "5px" }}>
            @Data source Helsinki City Bike, covers the period of May to July
            2021.
          </p>

          <Map
            x={station.stationListDetails.x}
            y={station.stationListDetails.y}
            title={station.stationListDetails.Nimi}
          />

          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      )}
    </Box>
  );
};

export default SingleStation;
