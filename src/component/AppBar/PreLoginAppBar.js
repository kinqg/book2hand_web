import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "./images/MainTitleLogo.png";
import Button from "@material-ui/core/Button";
import PlainTextInput from "../../component/inputBox/PlainInputBox";
import { Grid } from "@material-ui/core";

/*const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2
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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(10)
  }
}));*/


export default function PreLoginAppBar() {
  const isComputer = useMediaQuery("(min-width:600px)");
  if (isComputer) {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={2}>
                <img
                  position="static"
                  src={logo}
                  width="110px"
                  alt="Book2handstore"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row-reverse"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Button variant="contained" color="secondary" onClick={()=>{/*TODO:LOGIN */}} size="small">
                  Login
                </Button>
              </Grid>
              <PlainTextInput width="20%" placeholder="password" />
              <PlainTextInput width="20%" placeholder="username" />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Grid
              container
              spacing={1}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
                <img
                  position="static"
                  src={logo}
                  width="100px"
                  alt="Book2handstore"
                />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
