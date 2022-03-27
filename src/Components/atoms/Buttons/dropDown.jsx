import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { MdOutlineArrowDropDown } from 'react-icons/md';
import { makeStyles } from '@mui/styles';
const makestyle=makeStyles({
  dropDwon:{
    fontSize:'20px'
  }
})
export default function DropDwon({listMenu,label,styled}) {
  const classes=makestyle()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="fade-button"
        variant='outlined'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={styled}
        
      >
      <span >{label}</span>  <MdOutlineArrowDropDown className={classes.dropDwon}/>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
          listMenu.map((li)=>(
            <MenuItem onClick={handleClose}>{li}</MenuItem>
          ))
        }
      </Menu>
    </div>
  );
}
