import React from 'react';

import './App.css';
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction';
import WithoutLosses from './Components/WithoutLosses';
import Button from './Components/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';



function App() {


  return (
    

    <>
      <Navbar />
      <Introduction />
      <WithoutLosses />
      <div id="team">
      <h>Team</h>
      </div>
    </>


  );
}

export default App;
