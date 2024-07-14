import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] = useState(5)
let max = 20
let min = 0

  //let counter = 5;
  const addValue = () => {
    if(counter < max){
   setCounter(counter + 1)
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
