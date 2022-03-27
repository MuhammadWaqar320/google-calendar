import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import contextGlobal from "../../Context/contextGlobal";
import Backdrop from "@mui/material/Backdrop";
import { AiOutlineCheck } from "react-icons/ai";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";
import {
  MdOutlineClose,
  MdOutlinePeople,
  MdOutlineLocationOn,
} from "react-icons/md";
import { HiOutlineMenuAlt4, HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsDot } from "react-icons/bs";

import { BsCalendarEvent } from "react-icons/bs";

import TextField from "@mui/material/TextField";
import { BsClock } from "react-icons/bs";
import Stack from "@mui/material/Stack";
import Image from "../atoms/image";
import ButtonComponent from "../atoms/Buttons/button";
import { borderRadius, fontSize } from "@mui/system";
const style = {
  modelstyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "340px", md: "38px", lg: "450px" },
    bgcolor: "white",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    paddingBottom: "10px",
  },
  header: {
    display: "flex",
    padding: "10px 5px",
    background: "#edeff0",
    fontSize: "20px",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
  },
  footer: {
    textAlignLast: "end",
    marginTop: "40px",
    marginRight: "15px",
    display: "flex",
    justifyContent: "right",
  },
  menuIcon: {
    width: "50%",
    cursor: "pointer",
  },
  closeIcon: {
    width: "50%",
    AlginItems: "right",
    textAlignLast: "end",
    cursor: "pointer",
  },
  input: {
    textAlign: "center",
    marginTop: "0px",
    marginLeft: "8%",
  },
  event: {
    color: "#2196f3",
    fontSize: "25px",
    fontWeight: "bold",
  },
  inputfield: {
    width: "80%",
    borderBottom: "1px solid silver",
  },
  clock: {
    display: "flex",

    marginLeft: "8%",
    marginTop: "15px",
  },
  Detail: {
    fontSize: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  username: {
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  clockIcon: {
    marginRight: "5.5%",
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  calendar: {
    marginRight: "5.5%",
    fontSize: "18px",
    marginLeft: "1%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  peopleGuest: {
    display: "flex",
    marginLeft: "8%",
    marginTop: "15px",
  },
  people: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "23px",
    marginRight: "5.5%",
  },
  guest: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imgDesign: {
    height: "15px",
    width: "18px",
  },
  meetingImg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "5.5%",
  },
  meetingBtn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  conference: {
    display: "flex",
    marginLeft: "8.5%",
    marginRight: "8.5%",
    marginTop: "15px",
  },
  singleColorbox: {
    width: "40px",
    height: "40px",
    margin: "1%",
    border: "1px solid silver",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
  },
  colorBox: {
    display: "flex",
    textAlign: "center",
    fontSize: "20px",
    marginTop: "15px",
    justifyContent: "center",
  },
  location: {
    display: "flex",
    marginLeft: "8%",
    marginTop: "3px",
  },
  locationField: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
  },
  locationIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    marginBottom: "6px",
    fontSize: "23px",
    marginRight: "5.5%",
  },
  locationInput: {
    width: "100%",
  },
};

const EventModel = () => {
  const colorLabel = ["#00008B", "#008000", "#8B0000", "#4169E1", "#DC143C"];
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {
    showModel,
    setShowModel,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    isEvent,
    setSelectedEvent,
    setIsEvent,
  } = useContext(contextGlobal);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [location, setLocation] = React.useState("");
  const [guest, setguest] = React.useState("");
  const [title, setTitle] = React.useState(
    selectedEvent && isEvent ? selectedEvent.title : ""
  );
  const [desc, setDesc] = React.useState(
    selectedEvent && isEvent ? selectedEvent.desc : ""
  );
  const [selectedColor, setSelectedColor] = React.useState(
    selectedEvent ? selectedEvent.Color : colorLabel[0]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      id: selectedEvent ? selectedEvent.id : Date.now(),
      title,
      desc,
      Color: selectedColor,
      day: daySelected.valueOf(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: eventData });
    } else {
      dispatchCalEvent({ type: "push", payload: eventData });
    }

    setShowModel(false);
    setSelectedEvent(null);
  };

  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/2491px-Google_Meet_icon_%282020%29.svg.png";
  // const [isActive,setIsActive]=useState()

  return (
    <Box>
      <Modal
        open={showModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disablePortal={true}
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style.modelstyle}>
          <Box sx={style.header}>
            <Box sx={style.menuIcon}>
              <HiOutlineMenuAlt4 />
            </Box>
            <Box sx={style.closeIcon}>
              <MdOutlineClose
                onClick={() => {
                  setIsEvent(false);
                  setShowModel(false);
                  setSelectedEvent("");
                }}
              />
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <p style={style.event}>
              {isEvent && selectedEvent ? "Update Event" : "Add Event"}
            </p>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box sx={style.input}>
              <TextField
                sx={style.inputfield}
                id="standard-basic"
                required
                label="Add title"
                variant="standard"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputProps={{ disableUnderline: true }}
              />
            </Box>

            <Box sx={style.clock}>
              <Box sx={style.clockIcon}>
                <BsClock />
              </Box>
              <Box sx={style.Detail}>
                {daySelected && daySelected.format("dddd, MMMM DD")}
                <Box sx={{ fontSize: "12px" }}>Does not repeat</Box>
              </Box>
            </Box>
            <Box sx={style.location}>
              <Box sx={style.locationIcon}>
                <MdOutlinePeople />
              </Box>
              <Box sx={style.locationField}>
                <TextField
                  sx={style.locationInput}
                  id="standard-basic"
                  label="Add guests"
                  value={guest}
                  onChange={(e) => setguest(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  variant="standard"
                />
              </Box>
            </Box>
            <Box sx={style.conference}>
              <Box sx={style.meetingImg}>
                <Image
                  source={img}
                  ALt="meeting logo"
                  style={style.imgDesign}
                />
              </Box>
              <Box sx={style.meetingBtn}>
                <ButtonComponent
                  variant="contained"
                  styled={{ textTransform: "none" }}
                  label="Add Google Meet Video Conferrencing"
                />
              </Box>
            </Box>
            {/* location */}
            <Box sx={style.location}>
              <Box sx={style.locationIcon}>
                <MdOutlineLocationOn />
              </Box>
              <Box sx={style.locationField}>
                <TextField
                  sx={style.locationInput}
                  id="standard-basic"
                  label="Add location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  variant="standard"
                />
              </Box>
            </Box>
            {/* desc */}
            <Box sx={style.location}>
              <Box sx={style.locationIcon}>
                <HiOutlineMenuAlt2 />
              </Box>
              <Box sx={style.locationField}>
                <TextField
                  required
                  sx={style.locationInput}
                  id="standard-basic"
                  label="Add description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  variant="standard"
                />
              </Box>
            </Box>
            {/* detail */}
            <Box sx={style.clock}>
              <Box sx={style.calendar}>
                <BsCalendarEvent />
              </Box>
              <Box sx={style.username}>
                Muhammad Waqar
                <Box sx={{ fontSize: "12px" }}>
                  Free <BsDot /> visibility <BsDot /> Do not Notify
                </Box>
              </Box>
            </Box>
            {/* color group */}
            <Box sx={style.colorBox}>
              {colorLabel.map((item) => {
                return (
                  <Box
                    onClick={() => setSelectedColor(item)}
                    sx={style.singleColorbox}
                    style={{ background: `${item}` }}
                  >
                    {selectedColor == item && (
                      <p>
                        <AiOutlineCheck />{" "}
                      </p>
                    )}
                  </Box>
                );
              })}
            </Box>
            {/* footer */}
            <Box sx={style.footer}>
              <ButtonComponent
                variant="text"
                type="submit"
                onClickEvent={
                  isEvent
                    ? () => {
                        dispatchCalEvent({
                          type: "delete",
                          payload: selectedEvent,
                        });
                        setIsEvent(false);
                      }
                    : ""
                }
                styled={{
                  textTransform: "none",
                  marginRight: "5px",
                  color: "black",
                }}
                label={isEvent ? "Delete" : "More options"}
              />
              <ButtonComponent
                variant="contained"
                type="submit"
                styled={{ textTransform: "none" }}
                label="Save"
              />
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
export default EventModel;
