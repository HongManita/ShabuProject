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
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import HeaderAddmin from "../Component/HeaderAddmin";
import MenuAddmin from "../Component/MenuAddmin";
import Page from "../../All Page/Pages";

export default function Editmenupage() {
  return (
    <div>
      <MenuAddmin />
      <HeaderAddmin />
      <Box
      sx={{
        bgcolor: "#fdffff",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          pt: 13,
          ml: 50,

          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 800,
            height: 500,
          },
        }}
      >
        <Paper elevation={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mt: 10,
              ml: 50,
              fontFamily: "Prompt",
              textAlign: "left",
            }}
          >
            แก้ไขเมนู
          </Typography>
        </Paper>
      </Box>
    </Box>

    </div>
  );
}