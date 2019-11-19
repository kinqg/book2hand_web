import React, { useState, useEffect } from "react";
import AppBar from "./component/AppBar/PreLoginAppBar.js";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import firebase from "service/firebase.js"

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      main: "#1E2758"
    },
    secondary: {
      main: "#4b5279"
    }
  }
});

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(()=>{
    firebase.isInitialized().then(val=>{
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized === true ? (
    <MuiThemeProvider theme={theme}>
      <AppBar />
    </MuiThemeProvider>
  ) : (
    <div>
      <CircularProgress />
    </div>
  );
}
