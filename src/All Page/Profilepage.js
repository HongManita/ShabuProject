import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import logo from "./ShabuLogo.png"; // Tell Webpack this JS file uses this image
import { getFormLabelUtilityClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

export default function firstpage() {
  return (
    <Box
      sx={{
        bgcolor: "#edfff0",
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
            ชื่อ นางสาวสะอาด ประหยัด <br></br>
            ชื่อเล่น มาตา<br></br>
            อายุ 21 <br></br>
            วันเกิด 27 / 09 /2544<br></br>
            ตำแหน่ง พนักงานครัว
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
