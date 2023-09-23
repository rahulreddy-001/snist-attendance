import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const RoomLocator = () => {
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "1000",
    mt: 3,
    mb: -3,
    height: "60px",
    fontWeight: 700,
    fontSize: "15px",
    background:
      "linear-gradient(to right, rgba(255, 255, 0, 0.7), rgba(255, 204, 0, 1))",
    color: "rgba(0, 0, 0, 0.7)",
    "&:hover": {
      background:
        "linear-gradient(to right, rgba(255, 255, 0, 1), rgba(255, 204, 0, 1))",
    },
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box>
      <Button
        onClick={() => {
          window.location.href = "/search";
        }}
        fullWidth
        variant="contained"
        sx={buttonStyle}
      >
        <LocationOnIcon sx={{ fontSize: "25px", marginRight: "10px" }} />
        Room Locator
      </Button>
    </Box>
  );
};

export default RoomLocator;
