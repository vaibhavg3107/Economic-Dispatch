import { borderRadius, grid, typography } from '@mui/system';
import Typography from "@mui/material/Typography"
import React, { useState } from 'react'
import TextField from "@mui/material/TextField"

export default function GeneratingStationData(props) {
    const [a, seta] = useState();
    const [b, setb] = useState();
    const [c, setc] = useState();
    const [pMin, setPMin] = useState();
    const [pMax, setPMax] = useState();
  
    function changeA(event) {
       
      console.log(event.target.value);  
      seta(event.target.value);
        console.log(a)
        props.updateData('a',parseInt(event.target.value),props.num-1);
    }
    function changeB(event) {
        setb(event.target.value);
        props.updateData('b',parseInt(event.target.value),props.num-1);
    }
    function changeC(event) {
        setc(event.target.value);
        props.updateData('c',parseInt(event.target.value),props.num-1);
    }
    function changePMin(event) {
        setPMin(event.target.value);
        props.updateData('pmin',parseInt(event.target.value),props.num-1);
    }
    function changePMax(event) {
        setPMax(event.target.value);
        props.updateData('pmax',parseInt(event.target.value),props.num-1);
    }

     

  return (
    <>

    
    <div>
      <h3>Generating Station {props.num}</h3>
      <label>Cost function (in Rs.): </label>
      <input type="number" className = "mx-2 inp" onChange={changeA} value = {a}></input>
      <label>P<sup>2</sup> + </label>
      <input type="number" className = "mx-2 inp" onChange={changeB} value = {b}></input>
      <label>P + </label>
      <input type="number" className = "mx-2 inp" onChange={changeC} value = {c}></input>
    </div>
    <div>
      <label>P_min (in MW) : </label>
      <input type="number" className = "mx-2 inp" onChange={changePMin} value = {pMin}></input>
    </div>
    <div>
      <label>P_max (in MW) : </label>
      <input type="number" className = "mx-2 inp" onChange={changePMax} value = {pMax}></input>
    </div>
    </>
  )
}
