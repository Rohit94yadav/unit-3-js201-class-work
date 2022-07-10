import logo from './logo.svg';
import './App.css';
import { NavBar } from './Routes/NavBar';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes />
      </NavBar>
    </div>
  );
}

export default App;
