import React from "react";
import { useState, useReducer } from "react";
import contextGlobal from "./contextGlobal";
import dayjs from "dayjs";
import { useEffect } from "react";
const SavedEventReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((event) => (event.id === payload.id ? payload : event));
    case "delete":
      return state.filter((event) => event.id !== payload.id);
    default:
      break;
  }
};
const initialEvent = () => {
  const stoarageEvent = localStorage.getItem("savedEvent");
  const parseEvent = stoarageEvent ? JSON.parse(StorageEvent) : [];
  return parseEvent;
};
const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(false);
  const [labels, setLabels] = useState([]);
  const [ isEvent,  setIsEvent] = useState(false);
  const [sideBar,setSideBar]=useState(true)

  const [savedEvents, dispatchCalEvent] = useReducer(
    SavedEventReducer,
    [],
    initialEvent
  );
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalenderMonth != null) {
      setMonthIndex(smallCalenderMonth);
    }
  }, [smallCalenderMonth]);
  return (
    <contextGlobal.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalenderMonth,
        setSmallCalenderMonth,
        daySelected,
        setDaySelected,
        showModel,
        setShowModel,
        dispatchCalEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
        labels,
        setLabels,
        setIsEvent,
        isEvent,sideBar,
        setSideBar
      }}
    >
      {props.children}
    </contextGlobal.Provider>
  );
};
export default ContextWrapper;
