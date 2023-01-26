import Tablegrid from "../Table/Table";
import { Box } from "@mui/material";

const Home: React.FC = () => {
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
      <Tablegrid />
    </Box>
  );
};

export default Home;
