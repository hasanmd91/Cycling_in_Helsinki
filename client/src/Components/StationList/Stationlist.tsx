import { Box, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { getStationDetails } from "../../Api/index";
import Table from "./Table";

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
        <Table stationList={stationList} />
      )}
    </Box>
  );
};

export default Stationlist;
