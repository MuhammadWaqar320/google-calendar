import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NavBarLeftSide from '../molecules/navBarLeftSide';
import {FiMenu } from 'react-icons/fi';
import NavBarRightSide from './../molecules/navBarRightSide';
import { Paper } from '@mui/material';
import dayjs from 'dayjs';
import { useContext } from 'react';
import contextGlobal from '../../Context/contextGlobal';
import { makeStyles } from "@mui/styles";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { Hidden } from '@mui/material';
const makestyle = makeStyles({
  Image: {
    height: "30px",
    marginRight:'15px',
    "@media (max-width: 767px)":{
      display:'none'
    },
    
  },
  NextPreButton: {
    marginLeft: "5%",
    marginTop: "5px",
    fontSize: "22px",
    color: "#3d3d3c",
    marginRight: "5%",
  },
  Text:{
    color:'#3d3d3c',
    marginRight:'50px;'
  },
  imgLogoClass: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginTop: "5px",
    marginRight:'20px'
  },

});
const pages = ['home', 'New Calender', 'Event','Tast'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {monthIndex,setMonthIndex,setSideBar,sideBar}=useContext(contextGlobal);
  const handleReset=()=>
  {
      setMonthIndex(dayjs().month())
  }
  const handlePreMonth=()=>
  {
      setMonthIndex(monthIndex-1)
  }
  const handleNextMonth=()=>
  {
      setMonthIndex(monthIndex+1)
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const classes = makestyle();
  const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/800px-Google_Calendar_icon_%282020%29.svg.png";
  return (

<AppBar position="static" sx={{background:'white',color:'black',boxShadow: '0',borderBottom:'1px solid silver'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       <Box sx={{width:{md:'37%'}}}>
       <NavBarLeftSide reset={handleReset} next={handleNextMonth} prev={handlePreMonth} />
       </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon onClick={()=>{sideBar?setSideBar(false):setSideBar(true)}} />
            </IconButton>
          
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
               <div className={classes.NextPreButton}>
          <GrFormPrevious onClick={handlePreMonth} />

          <GrFormNext onClick={handleNextMonth} />
        </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{width:'30%'}}>
            <NavBarRightSide/>
            </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/ogw/ADea4I5v7Y-NLaBAcyS-gNtv_MW2J63MXut8B0lUiA5GrA=s32-c-mo" />
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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
        </Toolbar>
      </Container>
    </AppBar>

   
  );
};
export default NavBar;
