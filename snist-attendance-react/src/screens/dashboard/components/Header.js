import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import icon from "../../../assets/icon.png";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/sessionSlice";

export default function Header({ name }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
