import React from "react";
import CreateEvent from "../atoms/Buttons/createEvent";
import EventList from "../atoms/Buttons/eventList";
import SearchBar from "../atoms/searchBar";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Box } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import dayjs from "dayjs";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import SmallCalendar from "../molecules/smallCalendar";
import contextGlobal from "../../Context/contextGlobal";
import { useEffect } from "react";
import { useContext } from "react";
import { getMonth } from "../../Functions/monthMatrix";
import "./../../App.css";
const makestyle = makeStyles({
  container: {
    display: "flex",
    // height:'50px'
    padding: "5px 14px",
  },
  containerLeft: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "14px",
    fontFamily: " Arial, Helvetica, sans-serif",
  },
  containerRight: {
    width: "50%",

    justifyContent: "right",
    textAlignLast: "end",
    display: "flex",
  },
  nextPre: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
const LeftSideBar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {
    monthIndex,
    daySelected,
    setDaySelected,
    setSmallCalenderMonth,
    setShowModel,
    savedEvents,
  } = useContext(contextGlobal);
  let myCalender = [];
  const otherCalender = [{ title: "holiday", colorName: "green" }];
  savedEvents.forEach((element) => {
    myCalender.push({ title: element.title, colorName: element.Color });
  });
  const handlePreMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };
  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };
  const classes = makestyle();
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);
  return (
    <Box>
      <CreateEvent />
      <Box className={classes.container}>
        <Box className={classes.containerLeft}>
          <p>
            {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
              "MMMM YYYY"
            )}
          </p>
        </Box>

        <Box className={classes.containerRight}>
          <Box className={classes.nextPre} onClick={handlePreMonth}>
            <GrFormPrevious />
          </Box>
          <Box className={classes.nextPre} onClick={handleNextMonth}>
            <GrFormNext />
          </Box>
        </Box>
      </Box>

      <Box sx={{ margin: "5% 10%" }}>
        <SmallCalendar
          currentMonth={currentMonth}
          currentMonthIndex={currentMonthIndex}
        />
      </Box>
      <SearchBar />
      <EventList label="My calenders" plus="" list={myCalender} />

      <EventList
        label="Other Calender"
        list={otherCalender}
        plus={
          <AiOutlinePlus style={{ fontSize: "20px", marginRight: "10px" }} />
        }
      />
    </Box>
  );
};

export default LeftSideBar;
