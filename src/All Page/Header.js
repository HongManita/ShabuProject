import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import logo from "./ShabuLogo.png"; // Tell Webpack this JS file uses this image

export default function Homepage() {
  let navigate_home = useNavigate();

  const routeChange_home = () => {
    let path_home = `/`;
    navigate_home(path_home);
  };

  let navigate_login = useNavigate();
  const routeChange_login = () => {
    let path_login = `/Login`;
    navigate_login(path_login);
  };

  return (
    <AppBar position="static">
    
      <Toolbar>
        <Typography
          disableGutters
          variant="h6"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          onClick={routeChange_home} 
        >
          <img id="img_1" src={logo} alt="Logo" width="50 px" height="70 px" />
        </Typography>

        <ButtonGroup
          sx={{ ml: "80%", pr: "1%", pl: "1%" }}
          color="secondary"
          variant="text"
          aria-label="text button group"
        >
          <Button
            sx={{
              pr: "40%",
              pl: "40%",
              fontSize: "105%",
              fontFamily: "Prompt",
            }}
          >
            ลูกค้า
          </Button>
          <Button
            sx={{
              pr: "50%",
              pl: "50%",
              fontSize: "105%",
              fontFamily: "Prompt",

            }}
            onClick={routeChange_login}
          >
            พนักงาน
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
