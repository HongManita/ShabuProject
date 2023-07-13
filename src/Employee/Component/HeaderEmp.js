import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from "react-router-dom";




import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';


import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const settings = ['แก้ไขข้อมูลส่วนตัว', 'ออกจากระบบ'];

export default function HeaderEmp() {
  
  let navigate_Table = useNavigate();
  const routeChange_Table = () => {
    let path_Table = `/Tablepage`;
    navigate_Table(path_Table);
  }

  let navigate_Order = useNavigate();
  const routeChange_Order = () => {
    let path_Order = `/Orderpage`;
    navigate_Order(path_Order);
  }

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <AppBar position="static" >
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, }}>
          <img id='img_1' src="/airplane-around-earth.png" width="10px" height="10 px" />

        </Typography>

        <Typography variant="h3" sx={{ flexGrow: 0, fontFamily: 'Forte' }}>
          HongGy Shabu
        </Typography>

        <Tabs sx={{ mr: '0%', ml: '6%', flexGrow: 5 }} value={value} onChange={handleChange} aria-label="icon label tabs example" indicatorColor='secondary' textColor='secondary'>
          <Tab sx={{ mx: 'auto', width: 150, fontFamily: 'RSU' }} icon={<TableRestaurantIcon />} label="โต๊ะ" onClick={routeChange_Table} />
          <Tab sx={{ mx: 'auto', width: 150, fontFamily: 'RSU' }} icon={<MenuBookRoundedIcon />} label="ออเดอร์"  onClick={routeChange_Order}/>
          <Tab sx={{ mx: 'auto', width: 150, fontFamily: 'RSU' }} icon={<MonetizationOnRoundedIcon />} label="ชำระเงิน"  onClick={routeChange_Table} />
        </Tabs>

        <Box sx={{ flxGrow: 0, ml: '8%' }}>

          <Tooltip title="ตั้งค่า">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography variant="body3" sx={{ fontFamily: 'RSU' }} textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>

  );
}

