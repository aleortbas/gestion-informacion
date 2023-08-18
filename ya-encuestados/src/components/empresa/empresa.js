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

  const resetForm = () => {
    setIdEmpresa("");
    setNombreEmpresa("");
    setCodUnidad("");
    setnombreUnidad("");
    setCodArea("");
    setNombreArea("");
    setIdSubarea("");
    setNombreSubarea("")
  }



  return (
    <div className="container-fluid gi-container">
      <div className="col-12">
        <form
          method="post"
          onSubmit={(event) => handleSubmit(event, "anadirEmpresa")}
        >
          <h3>Formato de edicion</h3>

          <div className="row">
            <div className="col-6">
              <div className="input-box">
                <input type="text" placeholder="Codigo de la empresa" name="codEmpresa" value={idEmpresa} onChange={(e) => setIdEmpresa(e.target.value)} required />
              </div>
            </div>
            <div className="col-6">
              <div className="input-box">
                <input type="text" placeholder="Nombre de la empresa" name="nombreEmpresa" value={nombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="input-box">
                <input type="text" placeholder="Codigo de unidad" name="codUnidad" value={codUnidad} onChange={(e) => setCodUnidad(e.target.value)} required />
              </div>
            </div>
            <div className="col-6">
              <div className="input-box">
                <input type="text" placeholder="Nombre de la unidad" name="nombreUnidad" value={nombreUnidad} onChange={(e) => setnombreUnidad(e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="input-box">
                <input type="text" placeholder="Codigo del area" name="codArea" value={codArea} onChange={(e) => setCodArea(e.target.value)} required />
              </div>
            </div>
            <div className="col-6">
              <div className="input-box">
                <input type="text" placeholder="Nombre del area" name="nombreArea" value={nombreArea} onChange={(e) => setNombreArea(e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="input-box">
                <input type="text" placeholder="Id subarea" name="idSubarea" value={idSubarea} onChange={(e) => setIdSubarea(e.target.value)} required />
              </div>
            </div>
            <div className="col-6">
              <div className="input-box">
                <input type="text" placeholder="Nombre de la subarea" name="nombreSubarea" value={nombreSubarea} onChange={(e) => setNombreSubarea(e.target.value)} required />
              </div>
            </div>
          </div>

          <div class="button-container">
            <button type="submit" class="btn btn-paginas agregar">
              Agregar
            </button>
            {showElement && (
              <button type="submit" className="btn btn-paginas agregar" >
                Editar
              </button>
            )}
            <button type="submit" class="btn btn-paginas red" onClick={resetForm}>
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
                      className="btn orange"
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
  );
}

export default Empresa;
