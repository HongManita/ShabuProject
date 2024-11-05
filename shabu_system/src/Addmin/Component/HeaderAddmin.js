import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router-dom";
import logo from "./ShabuLogo.png"; // Tell Webpack this JS file uses this image
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Tooltip from "@mui/material/Tooltip";

import Menu from "@mui/material/Menu";

import MenuItem from "@mui/material/MenuItem";

const settings = ["ข้อมูลส่วนตัว", "ออกจากระบบ"];

export default function Homepage() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
        <img
          id="img_1"
          src={logo}
          alt="Logo"
          width="50 px"
          height="70 px"
          onClick={routeChange_homeaddmin}
        />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ pl: 8, fontFamily: "Kanit", fontSize: 30 }}
        >
          ผู้จัดการ
        </Typography>

        <Stack direction="row" spacing={2} marginLeft={130}>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="ข้อมูลส่วนตัว">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Hong" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
