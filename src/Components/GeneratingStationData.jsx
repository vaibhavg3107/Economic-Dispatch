import React, { useState } from 'react'

export default function GeneratingStationData(props) {
    const [a, seta] = useState();
    const [b, setb] = useState();
    const [c, setc] = useState();
    const [pMin, setPMin] = useState();
    const [pMax, setPMax] = useState();

    function changeA(event) {
        seta(event.target.value);
    }
    function changeB(event) {
        setb(event.target.value);
    }
    function changeC(event) {
        setc(event.target.value);
    }
    function changePMin(event) {
        setPMin(event.target.value);
    }
    function changePMax(event) {
        setPMax(event.target.value);
    }

  return (
    <>
    <div>
      <h3>Generating Station {props.num}</h3>
      <label>Cost function (in Rs.): </label>
      <input className = "mx-2 inp" onChange={changeA} value = {a}></input>
      <label>P<sup>2</sup> + </label>
      <input className = "mx-2 inp" onChange={changeB} value = {b}></input>
      <label>P + </label>
      <input className = "mx-2 inp" onChange={changeC} value = {c}></input>
    </div>
    <div>
      <label>P_min (in MW) : </label>
      <input className = "mx-2 inp" onChange={changePMin} value = {pMin}></input>
    </div>
    <div>
      <label>P_max (in MW) : </label>
      <input className = "mx-2 inp" onChange={changePMax} value = {pMax}></input>
    </div>
    </>
  )
}
