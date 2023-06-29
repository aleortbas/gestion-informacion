import React, { useState, useEffect } from "react";
import axios from "axios";

function Proyectos() {

    const [data, setData] = useState([]);
    const [showElement, setShowElement] = useState(null)
    const [id_proyecto, setid_proyecto] = useState(null)
    const [nombre_proyecto, setnombre_proyecto] = useState(null)
    const [abreviatura, setAbreviatura] = useState(null)
    const [tipo_estudio, setTipo_estudio] = useState(null)
    const [conteo_ideal, setConteoIdeal] = useState(null)
    const [conteo_total, setConteoTotal] = useState(null)
    const [periodicidad, setPeriodicidad] = useState(null)
    const [fecha_inicio, setfecha_inicio] = useState(null)
    const [id_subarea, setid_subarea] = useState(null)

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
                id_proyecto: id_proyecto,
                id_subarea: id_subarea,
                nombre_proyecto: nombre_proyecto,
                abreviatura: abreviatura,
                periodicidad: periodicidad,
                tipoEstudio: tipo_estudio,
                conteoTotal: conteo_total,
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handelDeleteProyecto = async (event, id_proyecto) => {
        try {
            let res = await axios.delete(`http://localhost:5000/eliminarProyecto/${id_proyecto}`)
        } catch (error) {
            console.error(error)
        }
    }

    const handleClick = (item) => {
        setShowElement(!showElement);

        setid_proyecto(item.id_proyecto_historico);
        setid_subarea(item.id_subarea);
        setnombre_proyecto(item.nombre_proyecto);
        setAbreviatura(item.abreviatura_proyecto);
        setfecha_inicio(item.fecha_inicio_proyecto);
        setTipo_estudio(item.tipo_estudio)
        setConteoTotal(item.conteo_total_mediciones)
        setPeriodicidad(item.periodicidad)

        console.log(item)
    }

    const resetForm = () => {
        setid_proyecto("");
        setnombre_proyecto("");
        setfecha_inicio("");
        setid_subarea("");
        setShowElement(false)
    }

    return (
        <div className="container-fluid proveedor-container">

            <div className="col-12">
                <form
                    method="post"
                    onSubmit={(event) => handleSubmitProyecto(event, showElement ? "editarProyecto" : "anadirProyecto")}
                >
                    <h5>Formato de edicion</h5>

                    <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Codigo del proyecto</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="id_proyecto"
                                    placeholder="Id proyecto"
                                    name="id_proyecto"
                                    value={id_proyecto}
                                    onChange={(e) => setid_proyecto(e.target.value)}
                                    readOnly={showElement}
                                />
                                <small class="form-text text-muted">
                                    Debe de ser el codigo que se encuentra en listado Excel de
                                    areas
                                </small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Codigo de la subarea</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="id_subarea"
                                    placeholder="Id subarea"
                                    name="id_subarea"
                                    value={id_subarea}
                                    onChange={(e) => setid_subarea(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Nombre proyecto</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nombre_proyecto"
                                    placeholder="Nombre del proyecto"
                                    name="nombre_proyecto"
                                    value={nombre_proyecto}
                                    onChange={(e) => setnombre_proyecto(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Abreviatura</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="abreviatura"
                                    placeholder="abreviatura del proyecto"
                                    name="abreviatura"
                                    value={abreviatura}
                                    onChange={(e) => setAbreviatura(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Fecha de inicio</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="fecha_inicio"
                                    placeholder="Fecha de inicio"
                                    name="fecha_inicio"
                                    value={fecha_inicio}
                                    onChange={(e) => setfecha_inicio(e.target.value)}
                                    readOnly={showElement}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Periodicidad</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="periodicidad"
                                    placeholder="periodicidad"
                                    name="periodicidad"
                                    value={periodicidad}
                                    onChange={(e) => setPeriodicidad(e.target.value)}
                                />
                            </div>
                        </div>
                        {showElement && (
                            <><div className="col-6">
                                <div class="form-group">
                                    <label class="form-label">Tipo de estudio</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="tipoEstudio"
                                        placeholder="Tipo de estudio"
                                        name="tipoEstudio"
                                        value={tipo_estudio}
                                        onChange={(e) => setTipo_estudio(e.target.value)} />
                                </div>
                            </div><div className="col-6">
                                    <div class="form-group">
                                        <label class="form-label">Conteo total de mediciones</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="conteoTotal"
                                            placeholder="Conteo total de medicones"
                                            name="conteoTotal"
                                            value={conteo_total}
                                            onChange={(e) => setConteoTotal(e.target.value)} />
                                    </div>
                                </div></>
                        )}
                    </div>

                    <div className="button-container">
                        <button type="submit" className="btn btn-paginas" id="agregar">
                            Agregar
                        </button>
                        {showElement && (
                            <button type="submit" className="btn btn-paginas" id="editar">
                                Editar
                            </button>
                        )}
                        <button type="button" className="btn btn-paginas" id="cancelar" onClick={resetForm}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>

            <div className="col-12">
                <div className="table-container">
                    <table className="table table-border table-hover">
                        <thead className="thead">
                            <tr>
                                <th scope="col">ID proyecto</th>
                                <th scope="col">ID subarea</th>
                                <th scope="col">Nombre proyecto</th>
                                <th scope="col">Abreviatura</th>
                                <th scope="col">Fecha de inicio</th>
                                <th scope="col">Conteo total mediciones</th>
                                <th scope="col">Conteo ideal mediciones</th>
                                <th scope="col">Periodicidad</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id_proyecto_historico}>
                                    <td>{item.id_proyecto_historico}</td>
                                    <td>{item.id_subarea}</td>
                                    <td>{item.nombre_proyecto}</td>
                                    <td>{item.abreviatura_proyecto}</td>
                                    <td>{item.fecha_inicio_proyecto}</td>
                                    <td>{item.conteo_total_mediciones}</td>
                                    <td>{item.conteo_ideal_mediciones}</td>
                                    <td>{item.periodicidad}</td>
                                    <td>
                                        <button
                                            type="submit"
                                            className="btn red"
                                            id="areaButton"
                                            onClick={(event) => handelDeleteProyecto(event, item.id_proyecto_historico)}
                                        >
                                            Elimnar
                                        </button>
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
    )
}

export default Proyectos