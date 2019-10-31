import React from "react";
import InputBase from "@material-ui/core/InputBase";
import {fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inputRoot: props=>({
      color:!!props.color ? props.color:"primary",
  }),
  inputBox: {
    position: props=> !!props.position ? props.position:"relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor:props=> !!props.fade ? fade(theme.palette.common.white,props.fade):fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1)
    },
    marginRight: props=> !!props.marginRight ? props.marginRight:theme.spacing(2),
    marginLeft: props=> !!props.marginRight ? props.marginLeft:0,
    width: props=> !!props.width ? props.width:0,
  },
  inputInput: {
    padding: props=> !!props.height ?  theme.spacing(Math.floor(props.height/2),0,Math.floor(props.height/2),0):theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%"
    }
  }
}));

export default function PlainInputBox(props) {
    const classes=useStyles(props);

  return (
    <div className={classes.inputBox}>
      <InputBase
        fullWidth={true}
        placeholder={props.placeholder}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  );
}
