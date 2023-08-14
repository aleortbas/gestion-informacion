import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import "./index.css";
import "./components/navbar/navabar.css";
import "./components/footer/footer.css";
import "./components/home/home.css";
import "./components/empresa/empresa.css";
import "./components/cliente/cliente.css"
import "./components/proveedor/proveedor.css"
import "./components/proyectos/proyectos.css"
import "./components/medicion/medicion.css"
import "./components/metricas/metricas.css"
import "./components/cargoSolicitado/cargoSolicitado.css"
import "./components/subareaSolicitante/subareaSolicitante.css"
import "./components/login/login.css"



import App from "./App";
import reportWebVitals from "./reportWebVitals";

const accessToken = localStorage.getItem('accessToken');
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

console.log("TOKKKKEEEENN0 ", accessToken);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
