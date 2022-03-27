import React from 'react'

const Image = ({source,Alt,design}) => {
  return (
    <img src={source} alt={Alt} style={design}></img>
  )
}

export default Image