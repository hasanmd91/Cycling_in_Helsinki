import Tablegrid from "./Table";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { getJourneyDetails } from "../../Api";

export interface JourneyDetail {
  Departure_time: String;
  Return_time: String;
  Departure_Station_Id: number;
  Departure_Station_Name: String;
  Return_Station_Id: number;
  Return_Station_Name: String;
  Distance: number;
  Duration: number;
}

interface props {}

const Home: React.FC<props> = () => {
  const [journeyDetails, setJourneyDetails] = useState<JourneyDetail[]>([]);

  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [detailsPerPage, setDetailsPerPage] = useState<number>(10);

  const getjourneyData = async () => {
    const { data } = await getJourneyDetails();
    setJourneyDetails(data);
  };

  useEffect(() => {
    getjourneyData();
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
      {!journeyDetails.length ? (
        <CircularProgress />
      ) : (
        <Tablegrid journeyDetails={journeyDetails} />
      )}
    </Box>
  );
};

export default Home;
