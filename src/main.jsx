import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Mainroutes from "./Mainroutes";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Mainroutes />
    </BrowserRouter>
  </React.StrictMode>
);