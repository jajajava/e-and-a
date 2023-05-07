import React, { useState } from "react";

function Timer() {

    const [inputtedDate, setInputtedDate] = useState('');
    const [secondDate, setSecondDate] = useState('')
    const [intervals, setIntervals] = useState({});
    const [isChecked, setIsChecked] = useState(true);

    function calculateIntervals() {
        let custom = new Date(inputtedDate);
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

    console.log(secondDate)

    return (
        <div style={{ marginTop: '100px' }}>
            <form onSubmit={submitted}>
                <input placeholder="MM/DD/YYYY" onChange={(e) => setInputtedDate(e.target.value)}></input>
                <input type="checkbox" onClick={() => setIsChecked(!isChecked)} checked={isChecked}></input>
                <label htmlFor='checkbox'>Use today's date</label>
                {!isChecked ?
                    <input placeholder="MM/DD/YYYY" onChange={(e) => setSecondDate(e.target.value)}></input>
                    : null}
                <button>Calculate</button>
            </form>
            {Object.entries(intervals).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
            ))}
        </div>
    )
}






export default Timer