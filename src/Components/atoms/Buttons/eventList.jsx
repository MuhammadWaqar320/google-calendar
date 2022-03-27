import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import { RiCheckboxFill } from "react-icons/ri";
export default function EventList({ label, plus, list }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={label} />
        {plus} {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {list.map((item) => (
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <RiCheckboxFill
                style={{
                  color: item.colorName,
                  borderRadius: "5px",
                  marginRight: "10px",
                  fontSize: "23px",
                }}
              />
              <ListItemText primary={item.title} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </List>
  );
}
