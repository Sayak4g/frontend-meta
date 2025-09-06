import React from "react";
import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Mainroutes;