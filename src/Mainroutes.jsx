import React from "react";
import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Gesture from "./components/gesture.jsx"

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dasboard/gesture" element={<Gesture />} />
    </Routes>
  );
};

export default Mainroutes;