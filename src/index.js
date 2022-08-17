import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faker from "./Faker";
import App from "./App";
import Home from "./Home";
import "./style/root.css";
import "./style/header.css";
import "./style/datosPago.css";
import "./style/datosOperacion.css";
import "./style/descuentos.css";
import "./style/dividirGasto.css";
import "./style/continuar.css";
import "./style/home.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/mp-faker" element={<App />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="post" element={<Faker />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
