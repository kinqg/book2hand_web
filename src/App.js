import React, { Component } from 'react';
import AppBar from './component/AppBar/SimpleAppBar';
import {
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1E2758"
    },
    secondary: {
      main: '#4b5279'
    }
  }
});

class App extends Component {
  state = {}
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div>
        <AppBar/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;