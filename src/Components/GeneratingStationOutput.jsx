import React from "react";

export default function GeneratingStationOutput(props) {
  var data = props.data;
  var lamda = data["a"][props.idx] * 2 * props.P + data["b"][props.idx];
  return (
    <div>
      <p>
        {" "}
        Power Generation from Generating Station {props.idx + 1} is{" "}
        {props.P.toFixed(3)} MW.{" "}
      </p>
      <p>
        {" "}
        Incremental Cost for Generation Station {props.idx + 1} is Rs.{" "}
        {lamda.toFixed(3)}/MW/h.
      </p>
      <p>
        {" "}
        Cost for Generation Station {props.idx + 1} is Rs. {props.C.toFixed(3)}
        /h.
      </p>
    </div>
  );
}
