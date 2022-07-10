import logo from './logo.svg';
import './App.css';
import { Timeout } from './Components/Timeout';
import { FetchData } from './Components/FetchData';

function App() {
  return (
    <div className="App">
      <Timeout />
      <FetchData />
    </div>
  );
}

export default App;
