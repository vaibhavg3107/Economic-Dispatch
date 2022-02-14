import React from 'react'
import NValue from './NValue.jsx'
import GeneratingStationData from './GeneratingStationData';
import Button from './Button';
import Output from './Output';
import { useState } from 'react';

export default function WithoutLosses() {
    const [n, setN] = useState();
    const [Pd, setPd] = useState();

    function handleClickN() {
        
    }
    function handleClickData() {
        
    }
    function handleChangeN(event){
        setN(event.target.value);
    }
    function handleChangePd(event){
        setPd(event.target.value);
    }
  return (
    <div>
      <NValue n_value = {n} pd_value = {Pd} handleChangeN = {handleChangeN} handleChangePd = {handleChangePd} />
      
      <Button handleClick = {handleClickN} />
      <GeneratingStationData num = {1} />
      <GeneratingStationData num = {2} />
      <GeneratingStationData num = {3} />
      <Button handleClick = {handleClickData} /> 
      <Output />
    </div>
  )
}
