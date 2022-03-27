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
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
const makestyle = makeStyles({
  fullDate:{
    width:'100px'
  },
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  btn: {
    color: "black",
    border: "1px solid black",
    background: "red",
  },
  NextPreButton: {
    marginLeft: "5%",
    display: "flex",
    fontSize: "22px",
    color: "#3d3d3c",
    marginRight: "5%",
    padding:'0px 5px',
  },
  Next: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  Prev: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
const NavBarLeftSide = ({ reset, next, prev }) => {
  const classes = makestyle();
  const { monthIndex, setMonthIndex, setSideBar, sideBar } =
    useContext(contextGlobal);
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/800px-Google_Calendar_icon_%282020%29.svg.png";
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
    >
      <Box className={classes.imgLogoClass}>
        <Box className={classes.logo}>
          <Tooltip title="Main menu">
            <IconButton size="large" aria-haspopup="true" color="inherit">
              <MenuIcon
                onClick={() => {
                  sideBar ? setSideBar(false) : setSideBar(true);
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={classes.Image}>
          <Image style={{height:"30px"}} Alt="logo" source={logo} > </Image>
        
        </Box>

        <Box className={classes.Text}>Calendar</Box>
        <Box>
          <ButtonComponent
            variant="outlined"
            label="Today"
            onClickEvent={reset}
            styled={{
              color: "black",
              border: "1px solid silver",
              textTransform: "none",
            }}
          />
        </Box>
        <Box className={classes.NextPreButton}>
          <GrFormPrevious onClick={prev} className={classes.Prev} />

          <GrFormNext onClick={next} className={classes.Next} />
        </Box>

        <Box className={classes.fullDate}>
          <p>
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </p>
        </Box>
      </Box>
    </Typography>
  );
};
export default NavBarLeftSide;
