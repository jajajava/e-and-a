import { useState } from 'react';
import './App.css';



function App() {

  const [value, setValue] = useState(0)
  const [input, setInput] = useState('')

  function adder(e) {
    e.preventDefault()
    setValue(parseInt(value) + parseInt(input))
  }

  function subber(e) {
    e.preventDefault()
    setValue(parseInt(value) - parseInt(input))
  }

  return (
    <div className="App">
      <h1>Value: {value} </h1>
      <form>
        <input onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={adder}>Add value</button>
        <button onClick={subber}>Remove value</button>
      </form>

    </div>
  );
}

export default App;