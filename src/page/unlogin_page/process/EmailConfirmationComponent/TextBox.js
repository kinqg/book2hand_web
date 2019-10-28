import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box"
import { sizing, palette } from '@material-ui/system'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';

class TextBox extends Component {
    render() {
        return (
            <Grid container xl>

                <Grid item xs={12}>
                    <Box align="center" style={{ width: "100%", paddingTop: 40, }}>
                        <Box align="center">
                            <Paper align="center" style={{ width: 350, height: 250, paddingTop: 50, paddingBottom: 30 }}>
                                <Box fontFamily="Calibri" align='center' style={{ fontSize: "1.5rem", marginBottom: 20 }}>
                                    Please verify your email!
                                    </Box>
                                <Box fontFamily="Calibri" align='center' lineHeight={1.2} style={{ marginBottom: 10 }}>
                                    We've sent verification code to your<br />
                                    Check your email for verification code
                                    </Box>
                                <Box align="center">
                                    <TextField
                                        id="verifyField"
                                        style={{
                                            marginBottom: 10,
                                            width: "70%"
                                        }}
                                        id="outlined-search"
                                        placeholder="Verification code"
                                        type="search"
                                        margin="dense"
                                        variant="outlined"
                                    /><br />

                                    <ThemeProvider theme={createMuiTheme({
                                        palette: {
                                            primary: {
                                                main: "#233053"
                                            }
                                        }
                                    })}>
                                        <Button variant="contained" color="primary" size="small" createMuiTheme={{ primary: { main: "#233053" } }} style={{ width: "30%", marginBottom: 12 }}>
                                            Verify
                                            </Button>
                                    </ThemeProvider>
                                </Box>
                                <Box fontFamily="Calibri" align='center'>
                                    Email not recieved? <a href='/'>Click here to sent again</a>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default TextBox;