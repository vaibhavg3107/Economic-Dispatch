import React from "react";
import GeneratingStationData from "./GeneratingStationData";
import Button from "@mui/material/Button";
import Output from "./Output";
import { useState } from "react";
import { DialogActions, DialogContentText, FormControlLabel, Switch, Typography } from "@mui/material";
import axios from "axios";
import * as XLSX from "xlsx";
import excelFunction from "../services/importExcel";
import { Dialog, DialogTitle } from "@mui/material"
import { DialogContent } from "@material-ui/core";
let Data = { a: [], b: [], c: [], pmax: [], pmin: [] };
let pseudoData={};
let matrixData={};
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
  const [toConsiderLoss,setToConsiderLoss]=useState(false); 
  const [isValidData,setIsValidData]=useState(true);
  const [dialogContent,setDialogContent]=useState("");

  function convertExcelData(File) {
    excelFunction(File)
      .then((Data) => {
        const d=Data.data;
        const matrix=Data.mat_data;
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
        matrixData=matrix;
        console.log(Data)
        //setN(sz);
        //setPd(d[0].pd);

        // calculateWithoutLosses();
        setN(excelData.length);
        setPd(excelData[0].pd);
        console.log(d)
        console.log(Data);
      
        pseudoData=Data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function calculateWithoutLosses() {
    
    //console.log(pseudoData)
    //console.log(Data);
    if (isExcelData)
    Data=pseudoData;
    console.log(matrixData)
    const payload = {
      n: n,
      a: Data["a"],
      b: Data["b"],
      c: Data["c"],
      pmax: Data["pmax"],
      pmin: Data["pmin"],
      PD: Pd,
    };


    



    if (toConsiderLoss)
    {

      var inputMatrix=[];
      for (var i=0;i<n;i++)
    { 


      var tempA=[];
     
        
      console.log(typeof(matrixData[i].c1));  
      tempA=Object.values(matrixData[i]);
       console.log(tempA)
    
       inputMatrix.push(tempA);
    }
    payload.B=inputMatrix
    
  }
    console.log(payload)

    //checking conditions
    var pminSum=0,pmaxSum=0;

    for (var i=0;i<n;i++)
    {
      //console.log(Data["pmin"][i])
      pminSum+=Data["pmin"][i];
      pmaxSum+=Data["pmax"][i];
    }
  
    //console.log(pminSum)
    //console.log(pmaxSum)
    if (pminSum>Pd)
    {setIsValidData(false)
      setDialogContent("Please ensure that total demand is greater than the summation of minimum power generated from all stations")
  }
    else if (pmaxSum<Pd)
    {setIsValidData(false)
     setDialogContent("Please ensure that total demand is less than the summation of maximum power generated from all stations")
    }

    
 //   (toConsiderLoss)?payload.B=matrixData:null;

   // var url=(toConsiderLoss)?'api/loss':'api';
   var url=(!toConsiderLoss)?"api":"api/loss"; 
   console.log(url);
   axios
      .post(url, payload)
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
     console.log(Data)
    calculateWithoutLosses();
  }

  function handleChangeData(type, val, ind) {
    Data[type][ind] = val;
  }

  return (
   <div id="calculate" className="text-center">
      <h1> Calculations</h1>
       <Dialog
    open={!isValidData}
    onClose={()=>{setIsValidData(true)}}
    keepMounted
    aria-describedby="alert-dialog-slide-description"
   >
 <DialogTitle>Invalid Input Data!</DialogTitle>
 <DialogContent>


 <DialogContentText id="alert-dialog-slide-description">{dialogContent}</DialogContentText>
 </DialogContent>
 <DialogActions> 
<Button onClick={()=>{setIsValidData(true)}}>Ok</Button>

 </DialogActions>
   </Dialog>
      <FormControlLabel
        value="switch"
        label="Do you want to consider transmission losses?"
        
        control={

          <Switch
           onChange={(event)=>{

            setToConsiderLoss(event.target.checked);
            
            setIsExcelData(event.target.checked);
            console.log(toConsiderLoss);
           }}
           >
    

          </Switch>
        }

>

      </FormControlLabel> 
   
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

        {(!toConsiderLoss)?
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
        ></FormControlLabel>:null}

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
      {outputDisplay && <Output result={outputData} data={Data} loss={toConsiderLoss}/>}
    </div>
  );
}
