import React from 'react'
import { AppBar,IconButton,MenuItem,Toolbar, Typography } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import {Link} from "react-scroll"
export default function Navbar() {
  return (
   
    <AppBar style={{backgroundColor:"#000000"}} position="static">
 <Toolbar>
<IconButton color="inherit"><FunctionsIcon ></FunctionsIcon></IconButton>
<MenuItem> <Link  to="intro" smooth={true} spy={true} duration={100} >  <Typography variant="h6">Introduction</Typography> </Link></MenuItem>
<MenuItem> <Link 
    to="calculate"
    spy={true}
    smooth={true}
    duration={200}
    ><Typography variant="h6">Calculation</Typography> </Link></MenuItem>
<MenuItem> <Link to="team" smooth={true} spy={true} duration={200}> <Typography variant="h6">Team</Typography> </Link></MenuItem>

 </Toolbar>

    </AppBar>
  );
}
