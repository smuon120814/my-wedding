import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "rgba(25,25,25,0.8)",
    width: "100%",
    height: "100%",
    zIndex: -1,
    padding: 0,
    listStyleType: "none",
  },
  menu_item: {
    backgroundColor: "(rgb (25,25,25))",
    boxSizing: "border-box",
    opacity: 100,
    justifyContent: "center",
    fontFamily: "inherit",
    color: "black",
    fontSize: "1.5rem",
    padding: "auto auto auto auto",
    "&:hover": {
      color: "rgb(170,7,7)",
      cursor: "pointer",
      backgroundColor: red[50],
    },
  },
  menu_item_close: {
    boxSizing: "border-box",
    opacity: 100,
    justifyContent: "flex-end",
    fontFamily: "inherit",
    color: "black",
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  close_button: {
    color: "rgb(170,7,7)",
    height: "3rem",
    width: "3rem",
    "&:hover": {
      color: "rgb(170,7,7)",
      cursor: "pointer",
      backgroundColor: red[50],
    },
  },
  close_icon: {
    width: "2rem",
    height: "2rem",
  },
}));

const Menu = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [menuHidden, setMenuHidden] = useState<boolean>(true);

  const menuClose = (e: React.MouseEvent<HTMLElement>) => {
    setMenuHidden(!menuHidden);
  };

  const handleClose = (e: React.MouseEvent<HTMLElement>, path: string) => {
    setMenuHidden(true);
    navigate(path);
  };

  const backdropClick = (e: React.MouseEvent<HTMLElement>) => {
    setMenuHidden(true);
  };

  return (
    <>
      <ul className="menu">
        <li className="menu-item">
          <IconButton
            className={classes.close_button}
            onClick={(e) => menuClose(e)}
          >
            <CloseIcon fontSize="large"></CloseIcon>
          </IconButton>
        </li>
        <li className="menu-item" onClick={(e) => handleClose(e, "/")}>
          Home
        </li>
        <li
          className="menu-item"
          onClick={(e) => handleClose(e, "/wedding-information")}
        >
          Wedding
        </li>
        <li
          className="menu-item"
          onClick={(e) => handleClose(e, "/information")}
        >
          Information
        </li>
        <li className="menu-item" onClick={(e) => handleClose(e, "/contacts")}>
          Contacts
        </li>
      </ul>
    </>
  );
};

export default Menu;
