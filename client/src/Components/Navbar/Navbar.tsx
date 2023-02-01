import { AppBar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
// AppBar component for navigate to pages
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
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <button type="button" className="btn btn-dark">
            Home
          </button>
        </NavLink>

        <NavLink to="/journey" style={{ textDecoration: "none" }}>
          <button type="button" className="btn btn-dark">
            Journeys
          </button>
        </NavLink>

        <NavLink to="/stations" style={{ textDecoration: "none" }}>
          <button type="button" className="btn btn-dark">
            Stations
          </button>
        </NavLink>
      </Box>
    </AppBar>
  );
};

export default Navbar;
