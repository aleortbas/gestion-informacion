import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navabar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
