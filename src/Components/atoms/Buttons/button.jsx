import { Button } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

import { makeStyles } from "@mui/styles";
const ButtonComponent = ({ label, variant, styled, onClickEvent, type }) => {
  return (
    <Box>
      <Button variant={variant} type={type} onClick={onClickEvent} sx={styled}>
        {label}
      </Button>
    </Box>
  );
};

export default ButtonComponent;
