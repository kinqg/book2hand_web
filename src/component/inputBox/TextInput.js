import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";

const usestyles=makeStyles(theme=>({
    textfield:props=>({
        width: !!props.width ? props.width:200
    }),
    input:props=> !!props.height ? props.height:30,
    inputLabel: {
        position: "inherit",
        width: 0
      },
}))

export default function TextInput(props) {
    const classes=usestyles(props)
    return(
        <TextField
            variant="outlined"
            label={props.label}
            className={classes.textfield}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.inputLabel
            }}
            helperText={props.helperText}
        />)
}