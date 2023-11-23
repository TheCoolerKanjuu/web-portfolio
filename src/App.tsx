import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./components/routing/Animated-routes";

const theme = createTheme({
  palette:{
    mode: 'light'
  }
});

function App() {

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <AnimatedRoutes/>
        </BrowserRouter>
      </ThemeProvider>
  );
}


export default App;
