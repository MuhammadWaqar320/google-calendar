import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { makeStyles } from "@mui/styles";
const makestyle = makeStyles({
  searchBar: {
  

    background: "#ebebeb",
    border: "none",
    outline:'none',
    paddingLeft:'5px',
    paddingBottom:'0px',
    fontSize:'14px'
  },
  SearchBarIcon:{
    background: "#ebebeb",
    padding:'10px',
    width:'73%',
    borderRadius:'5px',
    display:'flex',
    margin:'0px 10%',
    marginTop:'10px'
    
  },
  icon:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
  }

});
const SearchBar = () => {
  const classes = makestyle();
  return (
    <div className={classes.SearchBarIcon}>
      <span className={classes.icon}>
        <MdOutlinePeopleAlt />
      </span>
      <input
        type="text"
        className={classes.searchBar}
        placeholder="Search for people"
      ></input>
    </div>
  );
};

export default SearchBar;
