import './App.css';
import { AppRouter } from "./routes/App_Router"
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6350c8',
      light: '#0b0c25',
    },
  },
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </header>  
    </div>
  );
}

export default App;
