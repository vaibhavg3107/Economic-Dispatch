import React from "react";
import GeneratingStationData from "./GeneratingStationData";
import Button from "@mui/material/Button";
import Output from "./Output";
import { useState } from "react";
import { FormControlLabel, Switch, Typography } from "@mui/material";
import axios from "axios";
import * as XLSX from "xlsx";
import excelFunction from "../services/importExcel";
let Data = { a: [], b: [], c: [], pmax: [], pmin: [] };
var excelData = [];

export default function WithoutLosses() {
  const [outputData, setOutputData] = useState({
    P: "[1, 2, 3]",
    C: "[10, 20, 30]",
    Total_Cost: "60",
  });

  const [n, setN] = useState();
  const [Pd, setPd] = useState();
  const [ListArray, setListArray] = useState([]);
  const [outputDisplay, setOutputDisplay] = useState(false);
  const [calculateButton, setCalculateButton] = useState(false);
  const [isExcelData, setIsExcelData] = useState(false);

  function convertExcelData(File) {
    excelFunction(File)
      .then((d) => {
        console.log(d);
        var sz = d.length;

        Data = { a: [], b: [], c: [], pmax: [], pmin: [] };

        for (var i = 0; i < sz; i++) {
          Data["a"].push(d[i].a);
          Data["b"].push(d[i].b);
          Data["c"].push(d[i].c);
          Data["pmax"].push(d[i].pmax);
          Data["pmin"].push(d[i].pmin);
          // Data[a].push(d[i].a);
        }

        excelData = d;

        //setN(sz);
        //setPd(d[0].pd);

        // calculateWithoutLosses();
        setN(excelData.length);
        setPd(excelData[0].pd);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function calculateWithoutLosses() {
    const payload = {
      n: n,
      a: Data["a"],
      b: Data["b"],
      c: Data["c"],
      pmax: Data["pmax"],
      pmin: Data["pmin"],
      PD: Pd,
    };

    axios
      .post("/api", payload)
      .then((resp) => {
        console.log(resp.data);
        setOutputData(resp.data);
        setOutputDisplay(true);
      })
      .catch((e) => console.log(e));
  }

  function handleChangeN(event) {
    setN(parseInt(event.target.value));
  }

  function handleChangePd(event) {
    setPd(parseInt(event.target.value));
  }

  function handleClickN() {
    setListArray([]);
    var sz = Data["a"].length;
    var newArray = Array.from(Array(sz).keys());
    for (var i = sz; i < n; i++) {
      newArray.push(i);
      Data["a"].push(0);
      Data["b"].push(0);
      Data["c"].push(0);
      Data["pmax"].push(0);
      Data["pmin"].push(0);
    }

    for (var i = sz; i > n; i--) {
      newArray.pop();
      Data["a"].pop();
      Data["b"].pop();
      Data["c"].pop();
      Data["pmax"].pop();
      Data["pmin"].pop();
    }

    setListArray(newArray);
    //console.log(Data);
    setCalculateButton(true);
    setOutputDisplay(false);
  }

  function handleClickData() {
    calculateWithoutLosses();
  }

  function handleChangeData(type, val, ind) {
    Data[type][ind] = val;
  }

  return (
    <div id="calculate" className="text-center">
      <h1> Calculations</h1>
      <div
        className="card"
        style={{
          width: "500px",
          boxShadow: "1px 2px 1px #9E9E9E",
          marginTop: "10px",
          borderRadius: "7px",
          padding: "18px 20px",
        }}
      >
        <FormControlLabel
          value="switch"
          label="Input data from excel"
          style={{ alignSelf: "center" }}
          control={
            <Switch
              onChange={(event) => {
                console.log(event.target.checked);
                setIsExcelData(event.target.checked);
                setOutputDisplay(false);
                setCalculateButton(false);
              }}
            ></Switch>
          }
        ></FormControlLabel>

        {!isExcelData ? (
          <form>
            <p style={{ textAlign: "start" }}>
              <label>Enter the number of power generating stations : </label>
              <input
                type="number"
                onChange={handleChangeN}
                className="mx-2 inp"
                value={n}
              />
            </p>

            <p style={{ textAlign: "start" }}>
              <label>Total Power Demand (in MW) : </label>
              <input
                type="number"
                onChange={handleChangePd}
                className="mx-2 inp"
                value={Pd}
              />
            </p>

            <Button
              variant="contained"
              style={{ backgroundColor: "#000000" }}
              onClick={handleClickN}
            >
              Submit
            </Button>
          </form>
        ) : (
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];

              convertExcelData(file);
              //importFromExcel(file);
              setCalculateButton(true);

              //console.log(outputDisplay)
            }}
          ></input>
        )}
      </div>
      {!isExcelData &&
        ListArray.map((i) => (
          <GeneratingStationData
            key={i}
            num={i + 1}
            updateData={handleChangeData}
          />
        ))}
      {calculateButton && (
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "#000000", marginTop: "10px" }}
          onClick={handleClickData}
        >
          {" "}
          Calculate
        </Button>
      )}
      {outputDisplay && <Output result={outputData} data={Data} />}
    </div>
  );
}
