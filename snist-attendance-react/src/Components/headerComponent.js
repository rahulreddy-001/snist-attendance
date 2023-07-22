import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import icon from "../Assets/icon.png";

export default function Header({ name }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={icon}
            height="70px"
            style={{
              marginLeft: "-23.5px",
              marginRight: "30px",
              cursor: "pointer",
            }}
          />
          <Typography component="div" sx={{ flexGrow: 1, fontSize: 17 }}>
            {name}
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              localStorage.setItem("isLogged", 0);
              localStorage.setItem("userid", "");
              localStorage.setItem("password", "");
              localStorage.setItem("recentLogin", "");
              localStorage.setItem("baseData", "");
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
