import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/Todo';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Routes } from './Routes/Routes';

const theme = createMuiTheme({
  spacing: 5
})

function App() {
  return (
    <ThemeProvider>
      <div>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
