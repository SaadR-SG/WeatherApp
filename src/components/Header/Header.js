import React from "react";
import { AppBar, Typography } from "@mui/material";
import '@fontsource/roboto/700.css';

const Header = () => {
    const weatherLogo = require('../../assets/weatherLogo.png');
    return (
        <>
            <AppBar>
                <Typography variant="h3" sx={{p:2}}>
                    <span>Weather App </span> 
                    <img style={{width:'50px'}} src={weatherLogo} alt='weather logo' />
                </Typography>
            </AppBar>
        </>
    );
};

export default Header;