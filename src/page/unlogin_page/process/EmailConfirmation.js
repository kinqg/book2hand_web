import React, {Component} from 'react';
import AppBar from './../../../component/AppBar/SimpleAppBar';
import TextBox from './EmailConfirmationComponent/TextBox';
import TextBoxForMobile from './EmailConfirmationComponent/TextBoxForMobile'
import useMediaQuery from "@material-ui/core/useMediaQuery";


export default function EmailConfirmation(){
    const isComputer = useMediaQuery("(min-width:600px)"); //if the device is computer ? true:false
        return(
            <div>
                <AppBar/>
                {isComputer ? <TextBox/>:<TextBoxForMobile/>}
            </div>
        )
}