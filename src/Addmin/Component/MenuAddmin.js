import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 180;

export default function MenuAddmin() {
  let navigate_profileaddminpage = useNavigate();
  const routeChange_profileaddminpage = () => {
    let path_profileaddminpage = `/profileaddminpage`;
    navigate_profileaddminpage(path_profileaddminpage);
  };

  let navigate_editemppage = useNavigate();
  const routeChange_editemppage = () => {
    let path_editemppage = `/editemppage`;
    navigate_editemppage(path_editemppage);
  };
  let navigate_editmenupage = useNavigate();
  const routeChange_editmenupage = () => {
    let path_editmenupage = `/editmenupage`;
    navigate_editmenupage(path_editmenupage);
  };

  let navigate_statpage = useNavigate();
  const routeChange_statpage = () => {
    let path_statpage = `/statpage`;
    navigate_statpage(path_statpage);
  };

  const handleClick = (menuLabel) => {
    console.log(`คลิกปุ่มเมนู ${menuLabel}!`);
   
    if (menuLabel === "แก้ไขข้อมูลพนักงาน") {
      routeChange_editemppage();
    } else if (menuLabel === "แก้ไขเมนูอาหาร") {
      routeChange_editmenupage();
    } else if (menuLabel === "ยอดขาย") {
      routeChange_statpage();
    } else {
     
    }
  };

  return (
    <Box>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", background: "#f7f7f7" }}>
          <List>
            {[
              "แก้ไขข้อมูลพนักงาน",
              "แก้ไขเมนูอาหาร",
              "ยอดขาย",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{ height: 143, border: "0.1px solid #ffffff" }}
                  onClick={() => handleClick(text)}
                >
                  <ListItemIcon>
                    {index % 4 === 0 ? (
                      
                      <ManageAccountsIcon />
                    ) : index % 4 === 2 ? (
                      <RestaurantMenuIcon />
                    ) : (
                      <LeaderboardIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontFamily: "Prompt",
                          fontSize: "15px",
                        }}
                      >
                        {text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
