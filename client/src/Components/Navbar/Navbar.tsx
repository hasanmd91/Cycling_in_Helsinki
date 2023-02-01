import { AppBar, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "65px",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "20px",
        }}
      >
        <DirectionsBikeIcon sx={{ color: "yellow" }} />
        <DirectionsBikeIcon sx={{ color: "yellow", marginLeft: "10px" }} />
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h5" align="center" color="#f5f5f5">
            Home
          </Typography>
        </NavLink>

        <NavLink to="/journey" style={{ textDecoration: "none" }}>
          <Typography variant="h5" align="center" color="#f5f5f5">
            Journeys
          </Typography>
        </NavLink>

        <NavLink to="/stations" style={{ textDecoration: "none" }}>
          <Typography variant="h5" align="center" color="#f5f5f5">
            Stations
          </Typography>
        </NavLink>
      </Box>
    </AppBar>
  );
};

export default Navbar;
