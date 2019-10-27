import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import titleLogo from "./images/TitleLogo.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 5
  },
  logoCard: isComputer =>
    isComputer
      ? {
          marginLeft: 15,
          marginTop: 10,
          marginBottom: 10
        }
      : {
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 10
        }
}));

export default function SimpleAppBar(props) {
  const classes = useStyles();
  const isComputer = useMediaQuery("(min-width:600px)"); //if the device is computer ? true:false

  if (isComputer) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <img
            src={titleLogo}
            width="30px"
            alt="Book2hand store"
            className={classes.logoCard}
          />
        </AppBar>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <img
            src={titleLogo}
            width="25px"
            alt="Book2hand store"
            className={classes.logoCard}
          />
        </AppBar>
      </div>
    );
  }
}
