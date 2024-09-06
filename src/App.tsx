import React from 'react';
import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Login from "./Identity/Login/Login";
import Logout from "./Identity/Logout/Logout";
import Register from "./Identity/Register/Register";
import InfoUtente from './Components/InfoUtente';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Login" element={<Login /> } />
        <Route path="/Logout" element={<Logout /> } />
        <Route path="/Register" element={<Register /> } />
        <Route path="/InfoUtente" element={<InfoUtente /> } />
      </Routes>
    </>
  );
}

export default App;