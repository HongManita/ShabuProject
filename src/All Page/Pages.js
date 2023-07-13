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

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "./ShabuLogo.png"; // Tell Webpack this JS file uses this image
import { getFormLabelUtilityClasses } from "@mui/material";

export default function firstpage() {
  return (
    <div
    style={{ backgroundColor: '#edfff0', height: '100vh', width: '100vw'}}>
  

      <img
        id="img_1"
        src={logo}
        alt="Logo"
        width="400px"
        height="420px"
        style={{ marginTop: "8%", marginLeft: "15%" }}
      />
      <Typography
        component="h1"
        variant="h5"
        sx={{
          mt: 1,
          ml: 25,
          alignItems: "center",
          fontFamily: "Kanit",
          fontSize: 45,
        }}
        color="#006D12"
      >
        ยินดีต้อนรับเข้าสู่ระบบ
      </Typography>
    </div>
  );
}
