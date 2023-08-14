import React from "react";

function Navbar() {

  const signOut = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/"
  }

  return (
    <header>
      <h2 className="logo">Logo</h2>
      <nav className="navigation">
        <a href="/home">Inicio</a>
        <a href="#">Acerca de</a>
        <button className="btnLogin-popup" onClick={signOut}>Cerrar session</button>
      </nav>
    </header>
  );
}

export default Navbar;
