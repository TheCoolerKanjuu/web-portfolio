import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";
import {ContactMe} from "./pages/contact-me/contact-me";
import {Portfolio} from "./pages/portfolio/portfolio";
import Header from "./layouts/header/header";

const darkTheme = createTheme({
  palette:{
    mode: 'dark'
  }
});

function App() {

  return (
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact-me" element={<ContactMe/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}


export default App;
