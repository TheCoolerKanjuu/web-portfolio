import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";
import {ContactMe} from "./pages/contact-me/contact-me";
import {Portfolio} from "./pages/portfolio/portfolio";
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
