import React from 'react'
import GeneratingStationOutput from './GeneratingStationOutput';

export default function Output(props) {
  let P = JSON.parse(props.result.P);
  let C = JSON.parse(props.result.C);
  let Total_Cost = props.result.Total_Cost;

  return (
    <div>
      <p>The optimal solution for minimum cost is : </p>
      {P.map((value, index) => <GeneratingStationOutput key = {index} idx = {index} P = {value} C = {C[index]} />)}
      <p>Total Generation Cost is Rs. {Total_Cost}. </p>
    </div>
  )
}
