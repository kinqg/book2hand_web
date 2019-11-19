import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "./images/MainTitleLogo.png";
import Button from "@material-ui/core/Button";
import PlainTextInput from "../../component/inputBox/PlainInputBox";
import { Grid } from "@material-ui/core";
import { isMobileOnly } from "react-device-detect";
import firebase from "../../service/firebase";
import alert from "../../component/DialogBox/Alert"

export default function PreLoginAppBar() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (!isMobileOnly) {
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
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={login({ email }, { password })}
                  size="small"
                >
                  Login
                </Button>
              </Grid>
              <PlainTextInput
                onChange={e => {
                  setPassword(e.target.value);
                }}
                value={password}
                width="20%"
                placeholder="password"
              />
              <PlainTextInput
                onChange={e => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
                value={email}
                width="20%"
                placeholder="email"
              />
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

  async function login(email, password) {
    try {
      await firebase.signIn();
    } catch(error){
      alert(error.message)
    }
  }
}
