import React, { useState, useEffect } from "react";
import axios from "axios";

function Area() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/area");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container-fluid" style={{ width: "80%" }}>
      <div className="row">
        <div className="col-3">
          <form method="post" action="anadirArea">
            <div class="form-group">
              <label class="form-label" for="inputArea">
                Codigo del area
              </label>
              <input
                type="text"
                class="form-control"
                id="inputArea"
                name="idArea"
                placeholder="Entre Codigo del area"
              />
              <small class="form-text text-muted">
                Debe de ser el codigo que se encuentra en listado Excel de areas
              </small>
            </div>

            <div class="form-group">
              <label class="form-label" for="inputNombre">
                Nombre del area
              </label>
              <input
                type="text"
                class="form-control"
                id="inputNombre"
                name="nombreArea"
                placeholder="Nombre del area"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="inputGerencia">
                Gerencia
              </label>
              <input
                type="text"
                class="form-control"
                id="inputGerencia"
                name="gerencia"
                placeholder="Gerencia"
              />
            </div>
            <button type="submit" class="btn btn-paginas">
              Agregar
            </button>
          </form>
        </div>
        <div className="col-9" style={{ height: "620px", overflow: "auto" }}>
          <div className="table-responsive">
            <table className="table table-border table-hover">
              <thead className="thead">
                <tr>
                  <th scope="col">cod_empresa</th>
                  <th scope="col">nombre empresa</th>
                  <th scope="col">cod_unidad</th>
                  <th scope="col">nombre unidad</th>
                  <th scope="col">cod_area</th>
                  <th scope="col">nombre area</th>
                  <th scope="col">id_subarea</th>
                  <th scope="col">nombre subarea</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id_subarea}>
                    <td>{item.cod_empresa}</td>
                    <td>{item.nombre_empresa}</td>
                    <td>{item.cod_unidad}</td>
                    <td>{item.nombre_unidad}</td>
                    <td>{item.cod_area}</td>
                    <td>{item.nombre_area}</td>
                    <td>{item.id_subarea}</td>
                    <td>{item.nombre_subarea}</td>
                    <td>
                      <button
                        type="submit"
                        class="btn red"
                        id="areaButton"
                        onclick="eliminarTest()"
                      >
                        Elimnar
                      </button>
                      <button
                        type="submit"
                        class="btn orange"
                        id="areaButton"
                        onclick="showDiv()"
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;
