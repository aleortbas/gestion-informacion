import axios from "axios";
import React, { useEffect } from "react";

function Home() {
  return (
    <div className="container" style={{ marginBottom: "20px" }}>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">G.I (gestion de la información)</h1>
          <p className="lead">
            Bienvenido a nuestro Sistema de Gestión de Proyectos y Información, la solución integral que revolucionará la forma en que gestionas tus proyectos y accedes a información relevante.
            <br></br>
            Descubre cómo nuestro sistema puede transformar la manera en que gestionas proyectos y accedes a información clave.
            <br></br>
          </p>
        </div>
      </div>



      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-4">
            <a href="/empresa">
              <div className="card-number">
                <div className="content-container information">
                  <div className="content">
                    <span className="stars"></span>
                    <h2></h2>
                    <p>Coordina y gestiona de manera eficiente las Empresa que poseen o
                      poseeran proyectos.
                    </p>
                  </div>
                </div>
                <div className="hoverable information">
                  <h2>Empresa</h2>
                </div>
              </div>
            </a>

          </div>
          <div className="col-4 col-sm-4">
            <a href="/proyectos">
              <div className="card-number">
                <div className="content-container information">
                  <div className="content">
                    <span className="stars"></span>
                    <h2></h2>
                    <p>Coordina y gestiona de manera eficiente las Empresa que poseen o
                      poseeran proyectos.
                    </p>
                  </div>
                </div>
                <div className="hoverable information">
                  <h2>Proyectos</h2>
                </div>
              </div>
            </a>
          </div>
          <div className="col-4 col-sm-4">
            <a href="/medicion">
              <div className="card-number">
                <div className="content-container information">
                  <div className="content">
                    <span className="stars"></span>
                    <h2></h2>
                    <p>Información detallada de cada medición realizada para una
                      encuesta
                    </p>
                  </div>
                </div>
                <div className="hoverable information">
                  <h2>Medicion</h2>
                </div>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-6">
            <a href="/proveedor">
              <div className="card-number">
                <div className="content-container information">
                  <div className="content">
                    <span className="stars"></span>
                    <h2></h2>
                    <p>Gestion de empresas que dan apoyo para la recoleccion y analis
                      de encuestas.
                    </p>
                  </div>
                </div>
                <div className="hoverable information">
                  <h2>Proveedor</h2>
                </div>
              </div>
            </a>
          </div>
          <div className="col-6 col-sm-6">
            <a href="/metricas">
              <div className="card-number">
                <div className="content-container information">
                  <div className="content">
                    <span className="stars"></span>
                    <h2></h2>
                    <p>Consulta de metricas generada con la base de datos
                    </p>
                  </div>
                </div>
                <div className="hoverable information">
                  <h2>Metricas</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
