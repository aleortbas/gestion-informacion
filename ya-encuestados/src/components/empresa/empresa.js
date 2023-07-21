import React, { useState, useEffect } from "react";
import axios from "axios";

function Empresa() {
  const [data, setData] = useState([]);
  const [showElement, setShowElement] = useState(false);

  const [idEmpresa, setIdEmpresa] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState(null);
  const [codUnidad, setCodUnidad] = useState(null);
  const [nombreUnidad, setnombreUnidad] = useState(null);
  const [codArea, setCodArea] = useState(null);
  const [nombreArea, setNombreArea] = useState(null);
  const [idSubarea, setIdSubarea] = useState(null);
  const [nombreSubarea, setNombreSubarea] = useState(null);

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

  const handleSubmit = async (event, endpoint) => {
    event.preventDefault();

    try {
      let res = await axios.post(`http://localhost:5000/${endpoint}`, {
        cod_empresa: idEmpresa,
        nombre_empresa: nombreEmpresa,
        cod_unidad: codUnidad,
        nombre_unidad: nombreUnidad,
        cod_area: codArea,
        nombre_area: nombreArea,
        id_subarea: idSubarea,
        nombre_subarea: nombreSubarea,
      });
      if (res.status === 200) {
        setIdEmpresa("");
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/empresa");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container-fluid empresa-container">
      <div className="col-12">
        <form
          method="post"
          onSubmit={(event) => handleSubmit(event, "anadirEmpresa")}
        >
          <h5>Formato de edicion</h5>

          <div className="row">
            <div className="col-6">
              <div class="form-group">
                <label class="form-label">Codigo de la empresa</label>
                <input
                  type="text"
                  class="form-control"
                  id="cod_empresa"
                  placeholder="Id empresa"
                  name="cod_empresa"
                  onChange={(e) => setIdEmpresa(e.target.value)}
                />
                <small class="form-text text-muted">
                  Debe de ser el codigo que se encuentra en listado Excel de
                  areas
                </small>
              </div>
            </div>
            <div className="col-6">
              <div class="form-group">
                <label class="form-label">Nombre de la empresa</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre_empresa"
                  placeholder="Nombre Empresa"
                  name="nombre_empresa"
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div class="form-group">
                <label class="form-label">Codigo unidad</label>
                <input
                  type="text"
                  class="form-control"
                  id="cod_unidad"
                  placeholder="Codigo de la unidad"
                  name="cod_unidad"
                  onChange={(e) => setCodUnidad(e.target.value)}
                />
              </div>
            </div>
            <div className="col-6">
              <div class="form-group">
                <label class="form-label">Nombre unidad</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre_unidad"
                  placeholder="Nombre unidad"
                  name="nombre_unidad"
                  onChange={(e) => setnombreUnidad(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div class="form-group">
                <label class="form-label">Codigo area</label>
                <input
                  type="text"
                  class="form-control"
                  id="codArea"
                  placeholder="Codigo del area"
                  name="cod_area"
                  onChange={(e) => setCodArea(e.target.value)}
                />
              </div>
            </div>
            <div className="col-6">
              <div class="form-group">
                <label class="form-label">Nombre del area</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre_area"
                  placeholder="nombreArea"
                  name="nombre_area"
                  onChange={(e) => setNombreArea(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div class="form-group">
                <label class="form-label">Id subarea</label>
                <input
                  type="text"
                  class="form-control"
                  id="idSubarea"
                  placeholder="Id subarea"
                  name="id_subarea"
                  onChange={(e) => setIdSubarea(e.target.value)}
                />
              </div>
            </div>
            <div className="col-6">
              <div class="form-group">
                <label class="form-label">Nombre subarea</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre_subarea"
                  placeholder="Nombre subarea"
                  name="nombre_subarea"
                  onChange={(e) => setNombreSubarea(e.target.value)}
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


      <div className="col-12" style={{ height: "400px", overflow: "auto", marginTop: "20px" }}>
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

      {showElement && (
        <div className="row">
          <div class="col-12 anadir-area">
            <form
              method="post"
              className="formularioEmpresa"
              onSubmit={(event) => handleSubmit(event, "editarEmpresa")}
            >
              <h5>Formato de edicion</h5>

              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label">Codigo de la empresa</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cod_empresa"
                      placeholder="Id empresa"
                      name="cod_empresa"
                      value={idEmpresa}
                      onChange={(e) => setIdEmpresa(e.target.value)}
                      readOnly
                    />
                    <small class="form-text text-muted">
                      Debe de ser el codigo que se encuentra en listado Excel de
                      areas
                    </small>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label">Nombre de la empresa</label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre_empresa"
                      placeholder="Nombre Empresa"
                      name="nombre_empresa"
                      value={nombreEmpresa}
                      onChange={(e) => setNombreEmpresa(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label">Codigo unidad</label>
                    <input
                      type="text"
                      class="form-control"
                      id="codUnidad"
                      placeholder="Codigo de la unidad"
                      name="cod_unidad"
                      value={codUnidad}
                      onChange={(e) => setCodUnidad(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label">Nombre unidad</label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre_unidad"
                      placeholder="Nombre unidad"
                      name="nombre_unidad"
                      value={nombreUnidad}
                      onChange={(e) => setnombreUnidad(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label">Codigo area</label>
                    <input
                      type="text"
                      class="form-control"
                      id="codArea"
                      placeholder="Codigo del area"
                      name="cod_area"
                      value={codArea}
                      onChange={(e) => setCodArea(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label">Nombre del area</label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre_area"
                      placeholder="nombreArea"
                      name="nombre_area"
                      value={nombreArea}
                      onChange={(e) => setNombreArea(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label">Id subarea</label>
                    <input
                      type="text"
                      class="form-control"
                      id="idSubarea"
                      placeholder="Id subarea"
                      name="id_subarea"
                      value={idSubarea}
                      onChange={(e) => setIdSubarea(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label class="form-label">Nombre subarea</label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre_subarea"
                      placeholder="Nombre subarea"
                      name="nombre_subarea"
                      value={nombreSubarea}
                      onChange={(e) => setNombreSubarea(e.target.value)}
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

export default Empresa;
