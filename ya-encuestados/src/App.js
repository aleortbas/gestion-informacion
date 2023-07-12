import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navabar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Area from "./components/area/area";
import Cliente from "./components/cliente/cliente";
import Proveedor from "./components/proveedor/proveedor";
import Proyectos from "./components/proyectos/proyectos";
import Medicion from "./components/medicion/medicion"
import Metricas from "./components/metricas/metricas";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/area" element={<Area />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/medicion" element={<Medicion />} />
          <Route path="/metricas" element={<Metricas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
