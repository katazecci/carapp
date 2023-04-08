import './App.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Carlist from './Carlist';

function App() {
return (
  <div className="App">
    <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        CarApp
      </Typography>
    </Toolbar>
  </AppBar>
  </Box>
  <Carlist />
</div>
);  
}

export default App;
