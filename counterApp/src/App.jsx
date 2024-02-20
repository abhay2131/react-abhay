
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(() => {
        if(counter < 20){
          return counter = counter + 1;
        }
        else{
             return counter;
        }
    });
  }
  const subValue = () => {
    setCounter(() => {
        if(counter > 0){
          return counter = counter - 1;
        }
        else{
             return counter;
        }
    });
  }

  return (
    <>
      <h2>Abhay aur React</h2>
      <p>counter is: {counter}</p>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={subValue}>Sub Value {counter}</button>
    </>
  )
}

export default App
