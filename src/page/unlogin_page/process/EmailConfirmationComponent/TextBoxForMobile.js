import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Logo from './image/Logo11.png'
import { sizing } from '@material-ui/system'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';


class TextBoxForMobile extends Component {
    render() {
        return (
            <Grid container xl>
                <Grid xs={12}>
                    <Paper style={{ height: "97vh", background: "", }}>
                        <Box style={{ background: "", marginBottom: "10vh", paddingTop: "10vh", color: '#1E1E1E' }} align="center">

                            <img src={Logo} alt="Logo" width="100%" />
                            <Box align="center" fontFamily="Calibri" fontWeight="fontWeightBold" letterSpacing={0.5} style={{ fontSize: "1.2rem", marginTop: "5vh" }}>
                                Please verify your email !
                                </Box>
                            <Box align="center" fontFamily="Calibri" fontWeight="fontWeightMedium" letterSpacing={0.5} lineHeight={1.5} style={{ fontSize: "0.8rem", marginTop: "2vh" }} >
                                Check your Email<br />
                                We've send verification code to your email
                            </Box>

                        </Box>
                        <Box fontFamily="Calibri" style={{ background: "" }} align="center">
                            <Input
                                id="verifyField"
                                placeholder="Verification code"
                                style={{
                                    width: "80%"
                                }}
                            />
                            <ThemeProvider theme={createMuiTheme({
                                palette: {
                                    primary: {
                                        main: "#233053"
                                    }
                                }
                            })}>
                                <Button variant="contained" color="primary" size="small" style={{ width: "80%", marginTop: "2vh", padding: "2vh" }}>
                                    Verify
                                </Button>
                            </ThemeProvider>
                            <Box fontFamily="Calibri" align="center" fontWeight="fontWeightMedium" letterSpacing={0.5} lineHeight={1.5} style={{ fontSize: "0.8rem", marginTop: "2vh" }} >
                                Email not recieved? <a href='/'>Click here to sent again</a>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}
export default TextBoxForMobile;