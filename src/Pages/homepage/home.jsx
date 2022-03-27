import React from "react";
import { makeStyles } from "@mui/styles";
import LeftSideBar from "../../Components/organisms/leftSideBar";
import MidContent from "../../Components/organisms/midContent";
import RightSideBar from "../../Components/organisms/rightSideBar";
import NavBar from "../../Components/organisms/navBar";
import { Grid } from "@mui/material";
import { getMonth } from "../../Functions/monthMatrix";
import contextGlobal from "../../Context/contextGlobal";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { Hidden } from "@mui/material";
import EventModel from "../../Components/molecules/eventModel";
const makestyle = makeStyles({
  leftSideBar: {
    borderRight: "1px solid silver",
    padding: "10px",
  },
  midContent: {},
});
const Home = () => {
  const classes = makestyle();
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showModel, sideBar } = useContext(contextGlobal);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <Box>
      {showModel ? <EventModel /> : ""}

      <Box>
        <NavBar />
      </Box>
      <Grid container direction="row">
        {sideBar ? (
          <>
            <Grid item md={2.2} xs={12} className={classes.leftSideBar}>
              <LeftSideBar />
            </Grid>
            <Hidden mdDown={true}>
              <Grid item md={9.8} className={classes.midContent}>
                <MidContent month={currentMonth} />
              </Grid>
            </Hidden>
          </>
        ) : (
          <>
            <Grid item md={12} xs={12} className={classes.midContent}>
              <MidContent month={currentMonth} />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
export default Home;
// midcontent==month
