import React, { useState } from "react";

function Timer() {

    const [firstDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('')
    const [intervals, setIntervals] = useState({});
    const [isChecked, setIsChecked] = useState(true);

    function calculateIntervals() {
        let custom = new Date(firstDate);
        let custom2 = new Date(secondDate);
        let now = Date.now();
        let interval = isChecked ? now - custom : Math.abs(custom - custom2);
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
                <input placeholder="MM/DD/YYYY" onChange={(e) => setFirstDate(e.target.value)}></input>
                {!isChecked ?
                    <input placeholder="MM/DD/YYYY" onChange={(e) => setSecondDate(e.target.value)}></input>
                    : null}
                <input type="checkbox" onClick={() => setIsChecked(!isChecked)} defaultChecked={isChecked}></input>
                <label htmlFor='checkbox'>Use today's date</label>
                <button id='timerSubmit'>Calculate</button>
            </form>
            {Object.entries(intervals).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
            ))}
        </div>
    )
}






export default Timer