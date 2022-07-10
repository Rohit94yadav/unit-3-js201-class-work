import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Memo } from './Component/Memo';

function App() {

  const [ timer, setTimer ] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setTimer(prev=> prev+1)
    }, 1000);
  },[])
  
  return (
    <div className="App">
      <h1>{timer}</h1>
      <Memo timer={timer} />
    </div>
  );
}

export default App;
