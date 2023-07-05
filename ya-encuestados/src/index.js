import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/navbar/navabar.css";
import "./components/footer/footer.css";
import "./components/home/home.css";
import "./components/area/area.css";
import "./components/cliente/cliente.css"
import "./components/proveedor/proveedor.css"
import "./components/proyectos/proyectos.css"
import "./components/medicion/medicion.css"
import "./components/metricas/metricas.css"
import "./components/discrepanciaMediciones/cargoSolicitado.css"

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
