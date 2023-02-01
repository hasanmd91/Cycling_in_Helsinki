import { Box, Button, Typography } from "@mui/material";
import Bike from "../../assets/Bike.svg";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        objectFit: "cover",
        gap: "50px",
      }}
    >
      <Box>
        <img src={Bike} alt="bike" height={300} />
      </Box>
      <Box width={400} textAlign="justify">
        <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
          {" "}
          Welcome To Helsinki City Bike{" "}
        </Typography>
        <Typography>
          This application displays journey data that took place between May and
          July of 2021. The data includes information about stations located in
          Helsinki and Espoo, as well as their locations. The data was sourced
          from Helsinki City Bike. This project was developed by Hasan as a
          pre-assignment for the Solita Dev Academy Finland 2023 program.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
