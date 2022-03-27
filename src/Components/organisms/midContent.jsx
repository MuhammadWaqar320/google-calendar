import React from 'react'
import Day from '../molecules/day';
import dayjs from 'dayjs';
const MidContent = ({month}) => {
  return (
    <div>
        {month.map((row, Rindex) => (
        <div key={Rindex} style={{display:'flex'}}>
          {row.map((day, index) =>(
          <Day day={day} key={index} index={Rindex} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default MidContent