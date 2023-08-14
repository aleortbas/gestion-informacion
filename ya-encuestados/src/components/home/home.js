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

      <div className="row">
        <div className="col-md-4 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Empresa</h5>
              <p className="card-text">
                {" "}
                Coordina y gestiona de manera eficiente las Empresa que poseen o
                poseeran proyectos.
              </p>
              <a href="/empresa" className="btn btn-paginas">
                Abrir
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Proyectos</h5>
              <p className="card-text">
                Almacenamiento de informacion historica de cada proyecto a la
                fecha.
              </p>
              <a href="/proyectos" className="btn btn-paginas">
                Abrir
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Clientes</h5>
              <p className="card-text">
                Sección de gestión de clientes: Agrega y edita clientes de la
                plataforma.
              </p>
              <a href="/cliente" className="btn btn-paginas">
                Abrir
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Medicion</h5>
              <p className="card-text">
                Información detallada de cada medición realizada para una
                encuesta
              </p>
              <a href="/medicion" className="btn btn-paginas">
                Abrir
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Proveedor</h5>
              <p className="card-text">
                Gestion de empresas que dan apoyo para la recoleccion y analis
                de encuestas.
              </p>
              <a href="/proveedor" className="btn btn-paginas">
                Abrir
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Metricas</h5>
              <p className="card-text">
                Consulta de metricas generada con la base de datos
              </p>
              <a href="/metricas" className="btn btn-paginas">
                Abrir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
