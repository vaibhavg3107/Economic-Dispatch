import React from 'react'

export default function GeneratingStationOutput(props) {
  return (
    <div>
      <p>Power Generation from Generating Station {props.idx + 1} is {props.P} MW. </p>
      <p>Cost for Generation Station {props.idx + 1} is Rs. {props.C}</p>
    </div>
  )
}
