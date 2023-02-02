import { Box, Button, Typography } from "@mui/material";
import Bike from "../../assets/Bike.svg";

// Home component for basic info about the application

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
      <Box width={700} textAlign="justify">
        <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
          {" "}
          Welcome To Helsinki City Bike{" "}
        </Typography>
        <Typography>
          This application provides bike sharing journey data from the Helsinki
          City Bike during the months of May to July in 2021. The application
          displays various statistics about bike journeys made by users,
          including information such as the station's address, capacity, number
          of departure journeys, number of return journeys, and average
          distances for departure and return journeys. The data is presented in
          a table format, making it easy to compare the statistics of different
          stations. Additionally, the application features an interactive map
          that displays the location of each station, allowing users to
          visualize the bike journey data in a geographical context. The
          user-friendly interface and the ability to access and explore the data
          easily makes this application a valuable tool for understanding and
          analyzing bike sharing patterns in the Helsinki and Espoo areas.
        </Typography>
        <Button
          variant="contained"
          color={"inherit"}
          href={"/stations"}
          sx={{ marginTop: "15px" }}
        >
          Lets get started
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
