import React from 'react'
import DropDwonButton from '../atoms/Buttons/dropDown';
import { RiSettings3Line} from 'react-icons/ri';
import { AiOutlineSearch,AiOutlineQuestionCircle } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { Box } from '@mui/material';
import { Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ButtonComponent from '../atoms/Buttons/button';
const makestyle=makeStyles({
  rightSideBar:{
    display:'flex',
    justifyContent:'right'
  },
  icon:{
    fontSize:'25px',
    marginTop:'3px',
    color:'#3d3d3c',
    marginRight:'5%'
  },
  btn:{
    marginRight:'8%'
  }
})
const NavBarRightSide = () => {
  const listMenu=['Month','Day','Week','Year','Schedule','4 Days']

  const classes=makestyle();
  return (
    <Box className={classes.rightSideBar}>
      <Hidden smDown={true}>
      <Box className={classes.icon}>
        <AiOutlineSearch/>
        </Box>
        <Box className={classes.icon}>
            <AiOutlineQuestionCircle/>
            
          </Box>
        <Box className={classes.icon}>
          <RiSettings3Line/>
        </Box>
      </Hidden>
       
      
          <Box className={classes.btn}>
          <DropDwonButton listMenu={listMenu} styled={{textTransform:'none',color:'black',border:'1px solid silver'}} label="Month"  />
          </Box>
      
        <Box className={classes.icon}>
          <CgMenuGridO/>
        </Box>
    </Box>
  )
}

export default NavBarRightSide