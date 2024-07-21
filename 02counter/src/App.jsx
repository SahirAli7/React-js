import react , { useState } from 'react'

import './App.css'

function App() {
const [counter,setCounter] = useState(5)
let max = 20
let min = 0

  //let counter = 5;
  const addValue = () => {
    if(counter < max){
  //  setCounter(prevCounter => prevCounter + 1)
  //  setCounter(prevCounter => prevCounter + 1)
  setCounter(counter+1)
    }
  }

  const decreaseValue = () => {
    if(counter > min){
      setCounter(counter - 1) 
    }
   
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counts from {min} to {max}</h2>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
      <p>example : {counter}</p>
    </>
  )
}

export default App
