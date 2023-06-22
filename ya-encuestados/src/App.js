import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navabar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Area from "./components/area/area";
import Cliente from "./components/cliente/cliente";
import Proveedor from "./components/proveedor/proveedor";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/area" element={<Area />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/proveedor" element={<Proveedor />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
