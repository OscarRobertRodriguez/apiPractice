import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";


import "./App.css";

const API_ENDPOINT = "https://api.wheretheiss.at/v1/satellites/25544";



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
