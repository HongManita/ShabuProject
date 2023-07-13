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


export default function Editemppage() {
  return (
    <div>
      <MenuAddmin />
      <HeaderAddmin />
      <Box
        sx={{
          bgcolor: "#fdffff",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            pt: 12,
            ml: 85,
            fontFamily: "Prompt",
            textAlign: "left",
            fontSize: 30,
          }}
          color="#006D12"
        >
          ข้อมูลพนักงาน
        </Typography>
        <Box
          sx={{
            ml: 33,
            pb: 10,

            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 1000,
              height: 1000,
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
              แก้ไขข้อมูลพนักงาน
            </Typography>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
