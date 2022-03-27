import React from "react";
import { Paper } from "@mui/material";
import logoPlus from "../../../Images/logoPlus.PNG";
import { makeStyles } from "@mui/styles";
import { MdOutlineArrowDropDown } from "react-icons/md";
import contextGlobal from "../../../Context/contextGlobal";
import { useContext } from "react";
import { Box } from "@mui/material";
import DropDwon from "./dropDown";
const makestyle = makeStyles({
  paper: {
    width: "52%",
    display: "flex",
    padding: "10px",
    border: "0px solid black",
    borderRadius: "30px",
    marginBottom: "10px",
    "@media (max-width:767px)": {
      width: "35%",
    },
  },
  img: {
    height: "30px",
    marginRight: "15%",
  },
  text: {
    fontSize: "14px",
    fontFamily: " Arial, Helvetica, sans-serif",
    verticalAlign: "middle",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  drop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "20px",
    marginLeft: "10px",
  },
});
const CreateEvent = () => {
  const { monthIndex, setShowModel } = useContext(contextGlobal);
  const classes = makestyle();
  return (
    <Box>
      <Paper
        elevation={2}
        onClick={() => setShowModel(true)}
        className={classes.paper}
        sx={{ borderRadius: "40px" }}
      >
        <img src={logoPlus} className={classes.img}></img>
        <span className={classes.text}>Create</span>
        <span className={classes.drop}>
          <MdOutlineArrowDropDown />
        </span>
      </Paper>
    </Box>
  );
};

export default CreateEvent;
