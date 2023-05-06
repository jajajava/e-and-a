import React, { useEffect, useState } from "react";

function Timer() {

    let now = Date.now();
    let custom = new Date('12/31/2001')
    // console.log(now)
    // console.log(custom.getTime())
    console.log((now - custom.getTime()) / 1000 / 60 / 60 / 24 / 365)  //THIS SHOWS HOW MANY YEARS ITS BEEN SINCE CUSTOM DATE
    // console.log(d.getTime() - 10000)


    return (
        <div style={{ marginTop: '100px' }}>
            <input placeholder="month"></input>
            <input placeholder="day"></input>
            <input placeholder="year"></input>
            <h1>Oops forgot to change placeholder</h1>
        </div>
    )
}






export default Timer