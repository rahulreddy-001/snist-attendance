import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
const theme = createTheme();

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
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
