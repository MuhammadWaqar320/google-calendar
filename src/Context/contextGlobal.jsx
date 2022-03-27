import React from "react";
const contextGlobal = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalenderMonth: 0,
  setSmallCalenderMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showModel: false,
  setShowModel: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},

  isEvent: false,
  setIsEvent: () => {},
  sideBar: true,
  setSideBar: () => {},
});

export default contextGlobal;
