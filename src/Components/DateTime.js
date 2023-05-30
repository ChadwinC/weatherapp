import React, { useEffect, useState } from "react";
//https://medium.com/create-a-clocking-in-system-on-react/create-a-react-app-displaying-the-current-date-and-time-using-hooks-21d946971556
//link above is used to create time and date


const DateTime = ()=>{
    var [date, setDate] = useState(new Date());

    useEffect(()=> {
        var timer = setInterval(()=>setDate(new Date()), 1000)
        return function cleanup(){
            clearInterval(timer)
        }

    });

    
    return(
        <div className="ba b--dashed bw3 pr3 white pa3">
            <h1>Time : {date.toLocaleTimeString()}</h1>
            <h1>Date : {date.toLocaleDateString()}</h1>
        </div>
    )

};


export default DateTime;