import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Create from './components/Create';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {

const [stocks, setStocks] = useState([]);

useEffect(()=>{

  fetch("https://justivo.com/stockws.php?get")
  .then(response => response.json())
  .then(dataReceived => setStocks(dataReceived));

}, []);

  return (

    <BrowserRouter>
    <div className="App">
    
    <Navbar />
    <Routes>
      <Route path="/" element={<Home stocks={stocks}/>}/>
      <Route path="/Create" element={<Create />}/>
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
