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
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";


export default function Homepage() {

  
  let navigate_homeaddmin = useNavigate();
  const routeChange_homeaddmin = () => {
    let path_home = `/HomepageAddmin`;
    navigate_homeaddmin(path_home);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
    

      <Toolbar>
        <img id="img_1" src={logo} alt="Logo" width="50 px" height="70 px" onClick={routeChange_homeaddmin} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ pl: 8, fontFamily: "Kanit", fontSize: 30,  }}
          
        >
          ผู้จัดการ
        </Typography>

        <Stack direction="row" spacing={2} marginLeft={130}>
          <Avatar>H</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
