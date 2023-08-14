import React from "react";

function Navbar() {
  return (
    <header>
      <h2 className="logo">Logo</h2>
      <nav className="navigation">
        <a href="#">Inicio</a>
        <a href="#">Acerca de</a>
        <button className="btnLogin-popup">Cerrar session</button>
      </nav>
    </header>
  );
}

export default Navbar;
