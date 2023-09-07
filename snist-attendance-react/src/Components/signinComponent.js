import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useNavigate } from "react-router-dom";

import Notification from "./notification";

import logo from "../Assets/logo.png";
const theme = createTheme();

const GradientButton = () => {
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

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    localStorage.setItem("isLogged", 1);
    localStorage.setItem("userid", data.get("userid"));
    localStorage.setItem("password", data.get("password"));
    localStorage.setItem("recentLogin", new Date());
    navigate("/dashboard");
  };

  let loginStatus = localStorage.getItem("isLogged");

  React.useEffect(() => {
    if (loginStatus === "1") {
      navigate("/dashboard");
    }
  }, [loginStatus, navigate]);
  return (
    <div className="login-page">
      <div className="icon-img">
        <img
          src={logo}
          alt="log"
          style={{ height: "150px", marginBottom: "-50px" }}
        />
      </div>
      <ThemeProvider theme={theme} back>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              paddingTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userid"
                label="Roll Number"
                name="userid"
                autoComplete="userid"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <GradientButton />
            </Box>
          </Box>
        </Container>
        {/* <Notification /> */}
      </ThemeProvider>
    </div>
  );
}
