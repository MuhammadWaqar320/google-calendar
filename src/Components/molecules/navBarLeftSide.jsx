import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { FiMenu } from "react-icons/fi";
import Image from "./../atoms/image";
import ButtonComponent from "../atoms/Buttons/button";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Hidden } from "@mui/material";
import dayjs from "dayjs";
import { useContext } from "react";
import contextGlobal from "../../Context/contextGlobal";
import Tooltip from '@mui/material/Tooltip';
const makestyle = makeStyles({
  Image: {
    height: "30px",
    marginRight: "15px",
  
  },
  Text: {
    color: "#3d3d3c",
    marginRight: "50px;",
  },
  imgLogoClass: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginRight: "20px",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    border:'1px solid white',borderRadius:'50%',

    padding:'10px',
    "&:hover":{
      border:'1px solid #d9d9d9',borderRadius:'50%',
    
      padding:'10px',
      background:'#ebebeb'
    },
  
  },
  btn: {
    color: "black",
    border: "1px solid black",
    background: "red",
  },
  NextPreButton: {
    marginLeft: "5%",
  display:'flex',
    fontSize: "22px",
    color: "#3d3d3c",
    marginRight: "5%",
  },
  Next:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
  },
  Prev:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
  }
});
const NavBarLeftSide = ({ reset, next, prev }) => {
  const classes = makestyle();
  const { monthIndex, setMonthIndex,setSideBar ,sideBar} = useContext(contextGlobal);
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/800px-Google_Calendar_icon_%282020%29.svg.png";
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
    >
      <div className={classes.imgLogoClass}>
        <div className={classes.logo}>
          <FiMenu onClick={()=>{sideBar?setSideBar(false):setSideBar(true)}}  />
        </div>
          <div className={classes.Image}>
            <img height="30px"  src={logo}></img>
          </div>

        <div className={classes.Text}>Calendar</div>
        <div>
          <ButtonComponent
            variant="outlined"
            label="Today"
            onClickEvent={reset}
            styled={{ color: "black", border: "1px solid silver",textTransform:'none' }}
          />
        </div>
        <div className={classes.NextPreButton}>
          <GrFormPrevious onClick={prev} className={classes.Prev} />

          <GrFormNext onClick={next} className={classes.Next} />
        </div>

        <div className={classes.fullDate}>
          <p>
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </p>
        </div>
      </div>
    </Typography>
  );
};
export default NavBarLeftSide;
