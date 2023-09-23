import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ping } from "../redux/pingSlice";
import { login } from "../redux/sessionSlice";

import RoomLocator from "./components/RoomLocator";
import logo from "../../assets/logo.png";
import Loading from "./components/Loading";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sessionData = useSelector((state) => state.session);
  const serverStatus = useSelector((state) => state.ping);

  const [disabled, setDisabled] = React.useState(true);
  const [message, setMessage] = React.useState("Login In");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    dispatch(ping());
  }, []);

  React.useEffect(() => {
    if (serverStatus.data.success === true) {
      setDisabled(false);
      setMessage("Login In");
    } else {
      if (serverStatus.loading === false) {
        setMessage("Server not reachable");
      }
    }
  }, [serverStatus]);

  React.useEffect(() => {
    if (
      sessionData.data &&
      sessionData.loading === false &&
      sessionData.data.success === false
    ) {
      setError(true);
      setHelperText(sessionData.data.data.message);
    }
  }, [sessionData]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = data.get("userid");
    if (user.length === 10) {
      let password = data.get("password");
      dispatch(login({ user, password }));
    } else {
      setError(true);
      setHelperText("Invalid Roll Number");
    }
  };

  if (sessionData.loading) {
    return <Loading />;
  } else if (sessionData.data && sessionData.data.success) {
    navigate("/dashboard");
  } else {
    return (
      <div className="login-page">
        <div className="icon-img">
          <img
            src={logo}
            alt="log"
            style={{ height: "150px", marginBottom: "-50px" }}
          />
        </div>
        <ThemeProvider theme={theme}>
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
                onSubmit={handleLogin}
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
                  error={error}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  error={error}
                  helperText={helperText}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={disabled}
                >
                  {message}
                </Button>
                <RoomLocator />
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}
