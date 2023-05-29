import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navabar";
import Footer from "./components/footer/footer";
import GiArea from "./components/home/gi_area";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GiArea />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
