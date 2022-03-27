import React from 'react'
import { useState } from 'react';
import { getMonth } from './../../Functions/monthMatrix';
import dayjs from 'dayjs';
import contextGlobal from '../../Context/contextGlobal';
import { useEffect } from 'react';
import { useContext } from 'react';
import { makeStyles } from '@mui/styles';
const makestyle=makeStyles({
  currentDayClass:{
    background:'#067fbf',
    color:'white',
    borderRadius:'50%',
    paddingBottom:'3px',
    paddingLeft:'4px',
    paddingRight:'4px',
    paddingTop:'1px'
  },
  cell:{
    height:'25px',width:'35px',
    fontSize:'12px',
    textAlignLast:'center'
  },
  selectedDayClass:{
    background:'#92b5f7',
    color:'black',
    borderRadius:'50%',
    paddingBottom:'3px',
    paddingLeft:'4px',
    paddingRight:'5px',
    paddingTop:'1px'
  },

})
const SmallCalendar = ({currentMonthIndex,currentMonth}) => {
  const classes=makestyle();
  
    const {monthIndex,  daySelected, setDaySelected,setSmallCalenderMonth, setShowModel}=useContext(contextGlobal)
    const  getDayClass=(day)=>
    {
        if(day.format("DD-MM-YY")===dayjs().format("DD-MM-YY"))
        {
          return (classes.currentDayClass);
        }
        else if(day.format("DD-MM-YY")===(daySelected&&daySelected.format("DD-MM-YY")))
        {
          return (classes. selectedDayClass);
        }
        else{
          return "";
        }
        return "red"
  
    }
 
  return (
    <div>
      <div  style={{display:'flex'}}>
      {currentMonth[0].map((day, i) => {
          return (
            <div className={classes.cell}>
                 <span>{day.format("ddd").charAt(0)}</span>
            </div>
           
          );
        })}
      </div>
       
           {
    currentMonth.map((row,i)=>
    (
         <div style={{display:'flex'}}>
            {
                row.map((day,index)=>
                {
                    return (<div className={classes.cell}>
                      <span onClick={()=>{setSmallCalenderMonth(currentMonthIndex);setDaySelected(day);}} className={getDayClass(day)}> {day.format('DD')} </span>
                    
                    </div>)
                })
            }
         </div>
        
    )
      )
    }
  
    </div>
  )
}

export default SmallCalendar