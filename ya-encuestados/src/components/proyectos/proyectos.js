import React, { useState, useEffect } from "react";
import axios from "axios";

function Proyectos() {

    const [data, setData] = useState([]);
    const [showElement, setShowElement] = useState(null)
    const [idProyecto, setIdProyecto] = useState(null)
    const [nombreProyecto, setNombreProyecto] = useState(null)
    const [abreviatura, setAbreviatura] = useState(null)
    const [tipoEstudio, setTipoEstudio] = useState(null)
    const [conteoIdeal, setConteoIdeal] = useState(null)
    const [conteoTotal, setConteoTotal] = useState(null)
    const [periodicdad, setPeriodicidad] = useState(null)
    const [fechaInicio, setFechaInicio] = useState(null)
    const [idSubarea, setIdSubarea] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/proyecto")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitProyecto = async (event, endpoint) => {
        event.preventDefault();

        try {
            let res = await axios.post(`http://localhost:5000/${endpoint}`, {
                idProyecto: idProyecto,
                nombreProyecto: nombreProyecto,
                abreviatura: abreviatura,
                tipoEstudio: tipoEstudio,
                conteoTotal: "0",
                conteoTotal: "0",
                periodicdad: periodicdad,
                idSubarea: idSubarea
            })
        } catch (error) {

        }
    }

    const resetForm = () => {
        setIdProyecto("");
        setNombreProyecto("");
        setFechaInicio("");
        setIdSubarea("");
        showElement(false)
    }

    return (
        <div className="container-fluid proveedor-container">
            <div className="row">
                <div className="col-4 d-flex align-items-center">
                    <form className="formAnadirProveedor" method="post" onSubmit={(event) => handleSubmitProyecto(event, showElement ? "editarProveedor" : "anadirProveedor")}>
                        <div className="form-group">
                            <label>Nombre del proyecto</label>
                            <input type="text" className="form-control" name="nombre_proveedor" id="nombre_proveedor" placeholder="Nombre proveedor" value={nombreProyecto} onChange={(e) => setNombreProyecto(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Abreviatura</label>
                            <input type="text" className="form-control" name="abreviatura_proyecto" id="abreviatura_proyecto" placeholder="Abreviatura del proyecto" value={abreviatura} onChange={(e) => setAbreviatura(e.target.value)} />
                            <small className="form-text text-muted">Si no cuenta con una abreviatura, se tomara el nombre por defecto</small>
                        </div>
                        <div className="form-group">
                            <label>Tipo de estudio</label>
                            <input type="text" className="form-control" name="tipo_estudio" id="tipo_estudio" placeholder="Tipo de estudio" value={tipoEstudio} onChange={(e) => setTipoEstudio(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Fecha de inicio</label>
                            <input type="text" className="form-control" name="fecha_inicio" id="fecha_inicio" placeholder="Fecha de inicio" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Periodicdad</label>
                            <input type="text" className="form-control" name="periodicdad" id="periodicdad" placeholder="Periodicdad" value={periodicdad} onChange={(e) => setPeriodicidad(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Id subarea</label>
                            <input type="email" className="form-control" name="email_proveedor" id="email_proveedor" placeholder="Email proveedor" value={idSubarea} onChange={(e) => setIdSubarea(e.target.value)} />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="btn btn-paginas" id="agregar" disabled={showElement}>
                                Agregar
                            </button>
                            {showElement && (
                                <button type="submit" className="btn btn-paginas" id="editar">
                                    Editar
                                </button>
                            )}
                            <button type="submit" className="btn btn-paginas" id="cancelar" onClick={resetForm}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <div className="table-container">
                        <table className="table table-border table-hover">
                            <thead className="thead">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">ID subarea</th>
                                    <th scope="col">Fecha Inicio</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id_proyecto_historico}>
                                        <td>{item.id_proyecto_historico}</td>
                                        <td>{item.nombre_proyecto}</td>
                                        <td>{item.id_subarea}</td>
                                        <td>{item.fecha_inicio_proyecto}</td>
                                        <td>
                                            <button
                                                type="submit"
                                                className="btn red"
                                                id="areaButton"
                                                onClick="{(event) => handleDelete(event, item.id_proyecto_historico)}"
                                            >
                                                Elimnar
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn orange"
                                                id="areaButton"
                                                onClick="{() => handleClick(item)}"
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
    )
}

export default Proyectos