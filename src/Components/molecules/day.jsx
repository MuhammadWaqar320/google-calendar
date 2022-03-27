import React from "react";
import { useContext } from "react";
import contextGlobal from "./../../Context/contextGlobal";
import { useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
const makestyle = makeStyles({
  Box: {
    width: "14.2%",
    height: "118.5px",
    textAlign: "center",
    borderBottom: "1px solid silver",
    borderRight: "1px solid silver",
    fontSize: "13px",
    paddingTop: "10px",
    "@media (max-width: 767px)": {
      fontSize: "8px",
      height: "50px",
    },
  },
  currentDay: {
    background: "#067fbf",
    color: "white",
    borderRadius: "50%",
    paddingBottom: "3px",
    paddingLeft: "4px",
    paddingRight: "4px",
    paddingTop: "1px",
    cursor: "pointer",
  },
  eventClass: {
    border: "1px solid silver",
    margin: "5px 40px",
    color: "white",
    padding: "0px 3px 3px 3px",
    borderRadius: "5px",
    "@media (max-width: 767px)": {
      fontSize: "8px",
      margin: "1px",
      padding: "0px 1px 1px 1px",
    },
  },
});
const Day = ({ day, index }) => {
  const classes = makestyle();
  const {
    showModel,
    setShowModel,
    setDaySelected,
    savedEvents,
    selectedEvent,
    setSelectedEvent,
    setIsEvent,
  } = useContext(contextGlobal);
  const [dayEvent, setDayEvent] = useState([]);
  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvent(events);
  }, [savedEvents, day]);
  const getCurrentDayClass = () => {
    const isCurrent = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
    return isCurrent ? classes.currentDay : "";
  };
  return (
    <Box className={classes.Box}>
      {index === 0 ? (
        <>
          {" "}
          <p style={{ display: "inline" }}>{day.format("ddd")}</p>
          <br></br>
        </>
      ) : (
        ""
      )}

      <Box
        onClick={() => {
          setShowModel(true);
          setDaySelected(day);
        }}
      >
        <span className={getCurrentDayClass()}>{day.format("DD")}</span>
      </Box>

      {dayEvent.map((event) => (
        <>
          {" "}
          <Box
            onClick={() => {
              setSelectedEvent(event);
              setShowModel(true);
              setIsEvent(true);
              setDaySelected(day);
            }}
            className={classes.eventClass}
            sx={{ backgroundColor: event.Color }}
          >
            {event.title}
          </Box>
        </>
      ))}
    </Box>
  );
};

export default Day;
