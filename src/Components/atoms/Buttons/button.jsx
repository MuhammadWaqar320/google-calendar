import { Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
const ButtonComponent= ({label,variant,styled,onClickEvent,type}) => {
  return (
    <div>
        <Button variant={variant} type={type} onClick={onClickEvent} sx={styled}>{label}</Button>
        
    </div>
  )
}

export default ButtonComponent