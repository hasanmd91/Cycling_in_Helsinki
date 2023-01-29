import Tablegrid from "../Table/Table";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getJourneyDetails } from "../../Api";

interface JourneyDetail {
  Departure_time: String;
  Return_time: String;
  Departure_Station_Id: Number;
  Departure_Station_Name: String;
  Return_Station_Id: Number;
  Return_Station_Name: String;
  Covered_Distance: Number;
  Duration: Number;
}

interface props {}

const Home: React.FC<props> = () => {
  const [journeyDetails, setJourneyDetails] = useState<JourneyDetail[]>([]);

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
      <Tablegrid journeyDetails={journeyDetails} />
    </Box>
  );
};

export default Home;
