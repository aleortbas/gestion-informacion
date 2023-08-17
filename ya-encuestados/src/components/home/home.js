import axios from "axios";
import React, { useEffect } from "react";

function Home() {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">YaEncuestados</h1>
          <p className="lead">
            Sistema para la gestion de proyectos y informacion relacionada.
            <br></br>
            Recuerde que necesitara de una cuenta si desea manipular la informacion
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
