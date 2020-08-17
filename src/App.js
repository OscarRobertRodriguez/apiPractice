import React, { useState, useEffect, useCallback, useRef } from "react";
import Chart from "chart.js";
import axios from "axios";
import globalTemps from "./GLB.Ts+dSST.csv";
import northernTemps from "./NH.Ts+dSST.csv";
import southernTemps from "./SH.Ts+dSST.csv";
import test from "./test.csv";

import "./App.css";

const API_ENDPOINT = "";



function App() {


  const getISS = useCallback(async () => {
     const response = await axios.get(API_ENDPOINT); 
     console.log(response);

  }, []);



  useEffect(() => {
    getISS();
  }, [getISS]);


  return (
    <div className="App">
    
    </div>
  );
}

export default App;
