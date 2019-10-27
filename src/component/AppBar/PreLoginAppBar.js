import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "./images/MainTitleLogo";
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, IconButton } from "@material-ui/core";


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
        },
    menuButton: {
        marginLeft:5
    }
}));

export default function PreLoginAppBar() {
  const classes = useStyles();
  const isComputer = useMediaQuery("(min-width:600px)");
  if (isComputer) {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <IconButton
                edge="start"
                classesName={classes.menuButton}
              >
                  <MenuIcon/>
              </IconButton>
              
              <img src={logo} alt="Book2handstore" />
            </Grid>
            
            <Grid
              container
              direction="row-reverse"
              justify="flex-"
              alignItems="center"
            >
              
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return;
  }
}
