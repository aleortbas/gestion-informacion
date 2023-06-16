import React, { useState, useEffect } from "react";
import axios from "axios";

function Area() {
  const [data, setData] = useState([]);
  const [showElement, setShowElement] = useState(false);

  const [selectEmpresa, setIdEmpresa] = useState(null);
  const [selectNombreEmpresa, setNombreEmpresa] = useState(null);
  const [selectCodUnidad, setCodUnidad] = useState(null);
  const [selectNombreUnidad, setnombreUnidad] = useState(null);
  const [selectCodArea, setCodArea] = useState(null);
  const [selectNombreArea, setNombreArea] = useState(null);
  const [selectIdSubarea, setIdSubarea] = useState(null);
  const [selectNombreSubarea, setNombreSubarea] = useState(null);

  const handleClick = (item) => {
    setShowElement(!showElement);

    setIdEmpresa(item.cod_empresa);
    setNombreEmpresa(item.nombre_empresa);
    setCodUnidad(item.cod_unidad);
    setnombreUnidad(item.nombre_unidad);
    setCodArea(item.cod_area);
    setNombreArea(item.nombre_area);
    setIdSubarea(item.id_subarea);
    setNombreSubarea(item.nombre_subarea);

    console.log(item);
  };

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
    <div className="container-fluid empresa-container">
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
        <div className="col-9" style={{ height: "400px", overflow: "auto" }}>
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
                        onClick={() => handleClick(item)}
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

      {showElement && (
        <div className="row">
          <div class="col-12 anadir-area">
            <form
              method="post"
              action="anadirArea"
              className="formularioEmpresa"
              onSubmit="{handleSubmit}"
            >
              <h5>Formato de edicion</h5>

              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label" for="codigoArea">
                      Codigo de la empresa
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="idArea"
                      placeholder="Id empresa"
                      name="idEmpresa"
                      value={selectEmpresa}
                    />
                    <small class="form-text text-muted">
                      Debe de ser el codigo que se encuentra en listado Excel de
                      areas
                    </small>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label" for="nombreArea">
                      Nombre de la empresa
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombreEmpresa"
                      placeholder="Nombre Empresa"
                      name="nombreEmpresa"
                      value={selectNombreEmpresa}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label" for="codUnidad">
                      Codigo unidad
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="codUnidad"
                      placeholder="Codigo de la unidad"
                      name="codUnidad"
                      value={selectCodArea}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label" for="nombreUnidad">
                      Nombre unidad
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombreUnidad"
                      placeholder="Nombre unidad"
                      name="nombreUnidad"
                      value={selectNombreUnidad}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label" for="codArea">
                      Codigo area
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="codArea"
                      placeholder="Codigo del area"
                      name="codArea"
                      value={selectCodArea}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label" for="nombreArea">
                      Nombre del area
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombreArea"
                      placeholder="nombreArea"
                      name="nombreArea"
                      value={selectNombreArea}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label" for="idSubarea">
                      Id subarea
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="idSubarea"
                      placeholder="Id subarea"
                      name="idSubarea"
                      value={selectIdSubarea}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label" for="nombreSubarea">
                      Nombre subarea
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombreSubarea"
                      placeholder="Nombre subarea"
                      name="nombreSubarea"
                      value={selectIdSubarea}
                    />
                  </div>
                </div>
              </div>

              <div class="button-container">
                <button type="submit" class="btn btn-paginas" id="editar">
                  Editar
                </button>
                <button type="submit" class="btn btn-paginas" id="cancelar">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Area;
