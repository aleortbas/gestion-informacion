import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img src="/images/logo.png" height="40" alt="CoolBrand" />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link active">
              <i className="fa fa-home"></i> Inicio
            </a>
            <a href="/consultar" className="nav-item nav-link">
              <i className="fa fa-search"></i> Consultar
            </a>
            <a href="/registrar" className="nav-item nav-link">
              <i className="fa fa-pencil-square-o"></i> Registrar
            </a>
          </div>
          <div className="nav ms-auto">
            <a href="#" className="nav-item nav-link">
              <i className="fa fa-user"></i> #nombre usuario
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
