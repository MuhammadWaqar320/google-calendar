import React from "react";
import Day from "../molecules/day";
import dayjs from "dayjs";
import { Box } from "@mui/material";
const MidContent = ({ month }) => {
  return (
    <Box>
      {month.map((row, Rindex) => (
        <Box key={Rindex} style={{ display: "flex" }}>
          {row.map((day, index) => (
            <Day day={day} key={index} index={Rindex} />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default MidContent;
