import { React, useState } from "react";

function Adder() {
    const [value, setValue] = useState(0)
    const [input, setInput] = useState('')
    const [checked, setChecked] = useState(false)

    function adder(e) {
        e.preventDefault();
        if (Number.isNaN(parseInt(input)) === false) {
            setValue(parseInt(value) + parseInt(input))
        } else {
            setInput(0)
        }
        if (checked === true) {
            setInput(input);
        } else {
            setInput('');
        }
    }

    function subber(e) {
        e.preventDefault();
        if (Number.isNaN(parseInt(input)) === false) {
            setValue(parseInt(value) - parseInt(input))
        } else {
            setInput(0)
        }
        if (checked === true) {
            setInput(input);
        } else {
            setInput('');
        }
    }

    function resetter(e) {
        e.preventDefault();
        setValue(0);
        setInput('');
    }

    return (
        <div>
            <h1>Value: {value} </h1>
            <div id="adderComponent">
                <input value={input} onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={adder}>Add value</button>
                <button onClick={subber}>Remove value</button>
                <button onClick={resetter}>Reset</button>
                <input id='checkbox' type='checkbox' onClick={() => setChecked(!checked)}></input>
                <label htmlFor='checkbox'>Keep input</label>
            </div>
        </div>
    )
}

export default Adder