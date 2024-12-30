import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15) //here default value of setCounter is 15 which set value can be changed 
  // change in DOM , any thing can be put inside the useState(__), __ can be string , boolean, number etc anything 
  //setCounter here used to update  the value of counter , controls the value of counter 
  //like this only we use variables such as Login, setLogin. etc
  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter); //before update value

    // counter = counter +1

    // setCounter(counter => counter +1)  
    // setCounter(counter => counter +1)
    // setCounter(counter => counter +1)
    // setCounter(counter => counter +1)   this all gives result in only adding +1 

    setCounter(prevCounter => counter +1)  //callback prevcounter value and at each step +1 is done
    setCounter(prevCounter => counter +1)  //callback +1 added to previous 
    setCounter(prevCounter => counter +1)  // +1
    setCounter(prevCounter => counter +1)  // +1



    setCounter(counter)
    // OR  setCounter(counter + 1)

    console.log("clicked", counter); //after update value
  }
  const removeValue = () => {
    console.log("clicked", counter);  //before update value

    counter = counter - 1
    setCounter(counter)
    // OR  setCounter(counter - 1)

    console.log("clicked", counter);  //after update value
    
  }
  return (
    <>
      <h1>Coffee </h1>
      <h2>Counter value: {counter} </h2>

      <button onClick = {addValue}>Add Value</button>
      <br />
      <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
