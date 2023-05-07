import React, { useState } from "react";

function Timer() {

    const [inputtedDate, setInputtedDate] = useState('');
    const [intervals, setIntervals] = useState({});

    function calculateIntervals() {
        let custom = new Date(inputtedDate);
        let now = Date.now();
        let interval = now - custom;
        let intervalSecs = interval / 1000;
        let intervalMins = intervalSecs / 60;
        let intervalHours = intervalMins / 60;
        let intervalDays = intervalHours / 24;
        let intervalWeeks = intervalDays / 7;
        let intervalMonths = intervalDays / (365 / 12);
        let intervalYears = intervalDays / 365;

        setIntervals({
            'Miliseconds': interval,
            'Seconds': intervalSecs,
            'Minutes': intervalMins,
            'Hours': intervalHours,
            'Days': intervalDays,
            'Weeks': intervalWeeks,
            'Months': intervalMonths,
            'Years': intervalYears
        });
    }

    function submitted(e) {
        e.preventDefault();
        calculateIntervals();
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <form onSubmit={submitted}>
                <input placeholder="MM/DD/YYYY" onChange={(e) => setInputtedDate(e.target.value)}></input>
                <button>Click me</button>
            </form>
            {Object.entries(intervals).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
            ))}
        </div>
    )
}






export default Timer