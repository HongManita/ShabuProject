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
import HeaderAddmin from "../Component/HeaderAddmin";
import MenuAddmin from "../Component/MenuAddmin";
import Page from "../../All Page/Pages";
import Profilepage from "../../All Page/Profilepage";

export default function ProfilepageAddmin() {
  return (
    <div>
      <Profilepage/>
      <MenuAddmin />
      <HeaderAddmin />
    </div>
  );
}
