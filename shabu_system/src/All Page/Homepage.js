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

import Header from "../All Page/Header";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function Homepage() {
  let navigate_login = useNavigate();
  const routeChange_login = () => {
    let path_login = `/Login`;
    navigate_login(path_login);
  };
  return (
    <Box sx={{
      display: "flex",flexDirection: "column",
      backgroundColor:"#fdffff",
      height: '100vh',
        width: '100vw',
    }}>
     
      <Header />

      <Box
        sx={{
          mt: 22,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        <Box>
          <Button
            sx={{
              width: 300,
              height: 150,
              fontSize: "200%",
              fontFamily: "Prompt",
              borderRadius: 5,
              margin: '40px'
            }}
            variant="contained"
            size="large"
          >
            ลูกค้า
          </Button>
          &nbsp;
          <Button
            sx={{
              width: 300,
              height: 150,
              fontSize: "200%",
              fontFamily: "Prompt",
              border: "3px solid #00D923",
              borderRadius: 5,
              margin: '30px'
            }}
            variant="outlined"
            size="large"
            onClick={routeChange_login}
          >
            พนักงาน
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
