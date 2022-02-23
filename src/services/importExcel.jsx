import React from "react";
import * as XLSX from "xlsx"


   function importFromExcel(File) {

    const file = File;
    var Data;
    var d=[];
    return new Promise((resolve, reject) => {

      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {

        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const ws_name = wb.SheetNames[0];
        const ws = wb.Sheets[ws_name];
        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (e) => {
        reject(e);
      }

    })
  
    
  }

  
export default importFromExcel
