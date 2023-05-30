import React from "react";
import DateTime from "./DateTime";


const Header = () =>{
    return(
        <div className="flex justify-between">
            <header >
                <img alt="" src="https://www.animatedimages.org/data/media/148/animated-weather-image-0014.gif"/>
            </header>
            <div >
                <h1>Weather App</h1>
            </div>
            <div>
                <DateTime/>
            </div>
        </div>
    );
};

export default Header;