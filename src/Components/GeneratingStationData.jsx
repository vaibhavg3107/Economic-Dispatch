import React, { useState } from 'react'

export default function GeneratingStationData(props) {
  const [a, seta] = useState();
  const [b, setb] = useState();
  const [c, setc] = useState();
  const [pMin, setPMin] = useState();
  const [pMax, setPMax] = useState();

  function changeA(event) {
    //console.log(event.target.value);  
    seta(event.target.value);
    //console.log(a)
    props.updateData('a',parseFloat(event.target.value),props.num-1);
  }
  function changeB(event) {
    setb(event.target.value);
    props.updateData('b',parseFloat(event.target.value),props.num-1);
  }
  function changeC(event) {
    setc(event.target.value);
    props.updateData('c',parseFloat(event.target.value),props.num-1);
  }
  function changePMin(event) {
    setPMin(event.target.value);
    props.updateData('pmin',parseFloat(event.target.value),props.num-1);
  }
  function changePMax(event) {
    setPMax(event.target.value);
    props.updateData('pmax',parseFloat(event.target.value),props.num-1);
  }

     


  return (
    <>
    <div className="card text-center" style={{width:"500px" ,marginTop:"7px",boxShadow: "1px 2px 1px #9E9E9E" }}>
      <div className="card-body" >
    
        <p>
          <h3 className="card-title"><strong>Generating Station {props.num}</strong></h3>
          <div className="card-text">
            <label>Cost function (in Rs.): </label>
            <input type="number" className = "mx-2 inp" onChange={changeA} value = {a}></input>
            <label>P<sup>2</sup> + </label>
            <input type="number" className = "mx-2 inp" onChange={changeB} value = {b}></input>
            <label>P + </label>
            <input type="number" className = "mx-2 inp" onChange={changeC} value = {c}></input>
          </div>
        </p>
        <div className="card-text">
          <p>
            <label>P_min (in MW) : </label>
            <input type="number" className = "mx-2 inp" onChange={changePMin} value = {pMin}></input>
          </p>
          <p>
            <label>P_max (in MW) : </label>
            <input type="number" className = "mx-2 inp" onChange={changePMax} value = {pMax}></input>
          </p>
        </div>
      </div>
    </div>
  </>
  )
}
