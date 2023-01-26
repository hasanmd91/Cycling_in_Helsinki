import { AppBar, Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        height: "160px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginRight: "30px",
        }}
      ></Box>
    </AppBar>
  );
};

export default Footer;
