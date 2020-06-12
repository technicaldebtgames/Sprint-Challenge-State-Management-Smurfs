import React, { Component, useState } from 'react';
import axios from 'axios';
import "./App.css";

const initialSmurfs = [];

function App() {

  let [smurfs] = useState(initialSmurfs);

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux (well... context, at least)</h1>
      <div>Below are the smurfs. You can add to them if you like.</div>

      

    </div>
  );

}

export default App;
