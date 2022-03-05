import React from "react";
import GeneratingStationOutput from "./GeneratingStationOutput";

export default function Output(props) {
  let P = JSON.parse(props.result.P);
  let C = JSON.parse(props.result.C);
  var Total_Cost = parseFloat(props.result.Total_Cost);

  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "10px 50px 50px 30px",
        borderRadius: "10px",
        textAlign: "start",
        padding: "15px",
      }}
    >
      <h5>The optimal solution for minimum cost is : </h5>
      {P.map((value, index) => (
        <GeneratingStationOutput
          key={index}
          idx={index}
          P={value}
          C={C[index]}
          data={props.data}
        />
      ))}
      <p>Total Generation Cost is Rs. {Total_Cost.toFixed(3)}. </p>
    </div>
  );
}
