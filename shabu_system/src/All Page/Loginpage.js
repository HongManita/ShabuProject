import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../All Page/Header";
import logo from "./ShabuLogo.png";
const labelStyle = {
  fontFamily: 'Prompt',
};

export default function Login() {
  return (
    <ThemeProvider>
      <Header />
      
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          mt: 4,
        }}
      >
        <CssBaseline />
        <img
          id="img_1"
          src={logo}
          alt="Logo"
          width="50 px"
          height="70 px"
          alignItems="center"
        />
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: 1,
            alignItems: "center",
            fontFamily: "Kanit",
            fontSize: 30,
          }}
          color="#006D12"
        >
          กรุณาเข้าสู่ระบบ
        </Typography>
        <Box
          sx={{
            pl: 8,
            pr: 8,
            pb: 6,
            pt: 6,
            ml: -2,

            width: 430,
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #00D923",
            borderRadius: 5,
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={<span style={labelStyle}>ชื่อผู้ใช้</span>}
              name="email"
              autoComplete="email"
              autoFocus
              
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={<span style={labelStyle}>รหัสผ่าน</span>}
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontFamily: "Prompt" }}
            >
              เข้าสู่ระบบ
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
