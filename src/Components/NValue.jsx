import React from 'react'
import { useState } from 'react/cjs/react.production.min';
import Button from '@mui/material/Button'

function NValue(props) {
       
    
    //const [val,setVal]= useState(0)
    
    var nValue=0;
    return <form>
        <div>
            <label>Enter the number of power generating stations : </label>
            <input type="int"  onChange={(event)=>{nValue=event.target.value}}  className='mx-2 inp' />
        </div>
        <div>
            <label>Total Power Demand (in MW) : </label>
            <input type="int"  value={0} className='mx-2 inp' />
        </div>
<Button variant="contained" onClick={()=>props.handleClickN(nValue)}> Submit</Button>


         
        </form>
        
}

export default NValue;