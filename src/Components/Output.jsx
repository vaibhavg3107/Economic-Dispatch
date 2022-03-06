import React from "react";
import GeneratingStationOutput from "./GeneratingStationOutput";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Output(props) {
  let P = JSON.parse(props.result.P);
  let C = JSON.parse(props.result.C);
  var Total_Cost = parseFloat(props.result.Total_Cost);
  const data = props.data;
  
  const rows = [];
  P.map((value, index) => {
    var costFunc = data["a"][index] + "P^2 + " + data["b"][index] + "P + " + data["c"][index];
    var pmin = data["pmin"][index];
    var pmax = data["pmax"][index];
    var ind = index+1;
    var pg = value;
    var cost = C[index];
    var lamda = data["a"][index] * 2 * value + data["b"][index];
    rows.push({ind, costFunc, pmin, pmax, pg, lamda, cost});
  })
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
      <h5>The optimal solution for the minimum cost is : </h5>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Generating station</TableCell>
              <TableCell align="center">Cost Function (Rs./h)</TableCell>
              <TableCell align="center">Pmin (MW)</TableCell>
              <TableCell align="center">Pmax (MW)</TableCell>
              <TableCell align="center">Power Generated (MW)</TableCell>
              <TableCell align="center">Incremental Cost (Rs./h/MW)</TableCell>
              <TableCell align="center">Cost (Rs./h)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.ind}>
                <TableCell align="center">{row.ind}</TableCell>
                <TableCell align="center">{row.costFunc}</TableCell>
                <TableCell align="center">{row.pmin}</TableCell>
                <TableCell align="center">{row.pmax}</TableCell>
                <TableCell align="center">{row.pg.toFixed(2)}</TableCell>
                <TableCell align="center">{row.lamda.toFixed(2)}</TableCell>
                <TableCell align="center">{row.cost.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2}>Total Cost (RS.)</TableCell>
              <TableCell align="center">{Total_Cost.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* {P.map((value, index) => (
        <GeneratingStationOutput
          key={index}
          idx={index}
          P={value}
          C={C[index]}
          data={props.data}
        />
      ))}
      <p>Total Generation Cost is Rs. {Total_Cost.toFixed(3)}. </p> */}
    </div>
  );
}
