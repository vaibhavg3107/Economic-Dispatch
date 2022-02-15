import React from 'react'
import NValue from './NValue.jsx'
import GeneratingStationData from './GeneratingStationData';
import Button from '@mui/material/Button';
import Output from './Output';
import { useState } from 'react';
import axios from "axios"
const Data = { "a": [], "b": [], "c": [], "pmax": [], "pmin": [] };
export default function WithoutLosses() {

  function calculateWithoutLosses() {

    const payload = {"n" :n,
    "a" : Data['a'],
    "b" : Data['b'],
    "c" : Data['c'],
    "pmax":Data['pmax'],
    "pmin":Data['pmin'],
    "PD" : Pd }

    console.log(payload)

    axios.post('/api', payload).then((resp) => { console.log(resp.data) }).catch(e=>console.log(e))


  }




  const [n, setN] = useState(0);
  const [Pd, setPd] = useState(0);
  const [ListArray, setListArray] = useState([]);



  function handleChangeN(event) {
    console.log("dd")

    setN(parseInt(event.target.value));
  }


  function handleChangePd(event) {
    setPd(parseInt(event.target.value));
  }


  function handleClickN() {

    console.log("jwriwjop")
    setListArray([]);


    var newArray = [];
    for (var i = 0; i < n; i++) {

      newArray.push(i);
      Data["a"].push(0);
      Data["b"].push(0);
      Data["c"].push(0);
      Data["pmax"].push(0);
      Data["pmin"].push(0);

    }

    setListArray(newArray);
    console.log(Data)
  }
  function handleClickData() {
    console.log(Data)
    calculateWithoutLosses()
  }

  function handleChangeData(type, val, ind) {

    console.log(val);
    Data[type][ind] = val;
    console.log(Data);
  }




  return (
    <div>
      <form>
        <div>
          <label>Enter the number of power generating stations : </label>
          <input type="int" onChange={handleChangeN} className='mx-2 inp' value={n} />
        </div>
        <div>
          <label>Total Power Demand (in MW) : </label>
          <input type="int" value={Pd} onChange={handleChangePd} className='mx-2 inp' value={Pd} />
        </div>
        <Button variant="contained" onClick={handleClickN}>Submit</Button>


      </form>
      {ListArray.map((i) => <GeneratingStationData num={i + 1} updateData={handleChangeData} />)}

      <Button onClick={handleClickData} > Calculate</Button>
      <Output />
    </div>
  )
}
