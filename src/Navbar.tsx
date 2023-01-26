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
import { red, teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  menu_button: {
    margin: "1rem 1rem 1rem 1rem",
    color: "#007a5d",
    alignSelf: "flex-end",
    "&:hover": {
      color: "#528d7f",
    },
    [theme.breakpoints.up(600)]: {
      display: "none",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [menuHidden, setMenuHidden] = useState<boolean>(true);
  const [vpWidth, setVPWidth] = useState<number>(window.innerWidth);

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

  useEffect(() => {
    let isMounted = true;
    const updateWidth = () => {
      if (isMounted) {
        setVPWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", updateWidth);
    return () => {
      isMounted = false;

      window.removeEventListener("resize", updateWidth);
    };
  }, [menuHidden]);
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

      <div
        className={menuHidden ? "menu menu-no-display" : "menu menu-display"}
      >
        <button id="close-button" className="menu-item" onClick={menuClose}>
          <CloseIcon fontSize="large" />
        </button>
        <button className="menu-item" onClick={(e) => handleClose(e, "/")}>
          Home
        </button>
        <button
          className="menu-item"
          onClick={(e) => handleClose(e, "/wedding-information")}
        >
          Wedding
        </button>
        <button
          className="menu-item"
          onClick={(e) => handleClose(e, "/information")}
        >
          Information
        </button>
        <button
          className="menu-item"
          onClick={(e) => handleClose(e, "/contacts")}
        >
          Contacts
        </button>
      </div>
    </div>
  );
}

export default NavBar;
