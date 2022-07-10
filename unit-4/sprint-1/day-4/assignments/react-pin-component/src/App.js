import logo from './logo.svg';
import './App.css';
import { Pin } from './Pin/Pin';
import { useState } from 'react';

function App() {

  const [ state, setState ] = useState("");

  const onChange = (value)=>{
    setState(value)
  }
  
  return (
    <div className="App">
      <Pin noOfBoxes={5} itemsPerBox={1} handleState={onChange} />
      <h1>{state}</h1>
    </div>
  );
}

export default App;
