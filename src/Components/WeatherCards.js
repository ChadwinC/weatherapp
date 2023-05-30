import React from "react";

const WeatherCards = ({ name, icon, temp, region, country, text}) =>{ // using props 

        return(// main div
            <div className="tc bg-light-blue ma5 br3 shadow-2 o-60 grow pb6"> 
                <img alt="icon" src={icon} height="150px" />
                <h2>Todays Weather, {text}</h2>
                <div>
                    
                    <div>
                            <h2 >Location: {name}, {region}, {country}</h2>
                            <h2>Temperature: {temp}°C</h2>
                    </div>

                </div>    
            </div>

        )







}


export default WeatherCards;