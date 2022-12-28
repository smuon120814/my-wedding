import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

// Components
import Logo from "./Logo";

// Style
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "rgba(25,25,25,0.8)",
    width: "100%",
    height: "100%",
    zIndex: 1,
    overflowX: "hidden",
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
  menu_button: {
    margin: "1rem 1rem 1rem 1rem",
    color: "rgb(170,7,7)",
    alignSelf: "flex-end",
    "&:hover": {
      color: "rgb(240,7,7)",
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

function NavBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [menuHidden, setMenuHidden] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // const menuOpenClose = (e: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(e.currentTarget);
  //   return;
  // };

  // const handleClose = (e: React.MouseEvent<HTMLElement>, path: string) => {
  //   setAnchorEl(null);
  //   navigate(path);
  // };

  // const backdropClick = (e: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(null);
  // };

  const menuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setMenuHidden(false);
    // Block scroll when menu is displayed
    document.body.classList.add("no-scroll");
  };

  const menuClose = (e: React.MouseEvent<HTMLElement>) => {
    setMenuHidden(true);
    // Block scroll when menu is displayed
    document.body.classList.remove("no-scroll");
  };

  const handleClose = (e: React.MouseEvent<HTMLElement>, path: string) => {
    setMenuHidden(true);
    document.body.classList.remove("no-scroll");
    navigate(path);
  };

  useEffect(() => {}, [menuHidden]);

  return (
    <div className="nb-main">
      <IconButton
        className={classes.menu_button}
        arial-controls="simple-menu"
        aria-haspopup="true"
        onClick={menuOpen}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <ul className={menuHidden ? "menu menu-no-display" : "menu menu-display"}>
        <li className="menu-item">
          <p>
            <IconButton className={classes.close_button} onClick={menuClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </p>
        </li>
        <li className="menu-item" onClick={(e) => handleClose(e, "/")}>
          <p>Home</p>
        </li>
        <li
          className="menu-item"
          onClick={(e) => handleClose(e, "/wedding-information")}
        >
          <p>Wedding</p>
        </li>
        <li
          className="menu-item"
          onClick={(e) => handleClose(e, "/information")}
        >
          <p>Information</p>
        </li>
        <li className="menu-item" onClick={(e) => handleClose(e, "/contacts")}>
          <p>Contacts</p>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
