import axios from "axios";
import React, { useEffect, useState } from "react";

function Medicion(params) {

    const [data, setData] = useState([]);
    const [showElement, setShowElement] = useState(null)

    const [id_medicion, setIdMedicion] = useState(null)
    const [id_proyecto, setIdProyecto] = useState(null)
    const [email_cliente, setEmailCliente] = useState(null)
    const [no_contrato, setNoContrato] = useState(null)
    const [nit, setNit] = useState(null)
    const [presupuesto, setPresupuesto] = useState(null)
    const [muestra, setMuestra] = useState(null)
    const [fechaInicio, setFechaInicio] = useState(null)
    const [fechaFin, setFechaFin] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/medicion")
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmitMedicion = async (event, endpoint) => {
        event.preventDefault();

        try {
            let res = await axios.post(`http://localhost:5000/${endpoint}`, {
                id_medicion: id_medicion,
                id_proyecto: id_proyecto,
                email_cliente: email_cliente,
                no_contrato: no_contrato,
                nit: nit,
                presupuesto: presupuesto,
                muestra: muestra,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleClick = (item) => {
        setShowElement(!showElement);

        setIdMedicion(item.id_medicion);
        setIdProyecto(item.id_proyecto_historico);
        setEmailCliente(item.email_cliente);
        setNoContrato(item.no_contrato);
        setNit(item.nit_proveedor);
        setPresupuesto(item.presupuesto)
        setMuestra(item.muestra);
        setFechaInicio(item.fecha_inicio);
        setFechaFin(item.fecha_fin)
    }

    const handelDeleteMedicion = async (event, idMedicion) => {
        try {
            let res = await axios.delete(`http://localhost:5000/eliminarMedicion/${idMedicion}`)
        } catch (error) {
            console.error(error)
        }
    }

    const resetForm = () => {
        setShowElement(false);

        setIdMedicion("");
        setIdProyecto("");
        setEmailCliente("");
        setNoContrato("");
        setNit("");
        setMuestra("");
        setFechaInicio("");
        setFechaFin("")
    }

    return (
        <div className="container-fluid proveedor-container">
            <div className="col-12">
                <form method="post" onSubmit={(event) => handleSubmitMedicion(event, showElement ? "editarMedicion" : "anadirMedicion")}>
                    <h5>Formato para medicion</h5>

                    <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Id del proyecto</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="id_proyecto"
                                    placeholder="Id proyecto"
                                    name="id_proyecto"
                                    value={id_proyecto}
                                    onChange={(e) => setIdProyecto(e.target.value)}
                                    readOnly={showElement}
                                />
                                <small class="form-text text-muted">
                                    Escriba el id del proyecto al que desea agregar una medicion
                                </small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Email del cliente</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email_cliente"
                                    placeholder="Email cliente"
                                    name="email_cliente"
                                    value={email_cliente}
                                    onChange={(e) => setEmailCliente(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Numero de contrato</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="no_contrato"
                                    placeholder="Numero de contrato"
                                    name="no_contrato"
                                    value={no_contrato}
                                    onChange={(e) => setNoContrato(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">NIT del proveedor</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nit"
                                    placeholder="NIT"
                                    name="nit"
                                    value={nit}
                                    onChange={(e) => setNit(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Presupuesto</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="presupuesto"
                                    placeholder="Presupuesto"
                                    name="presupuesto"
                                    value={presupuesto}
                                    onChange={(e) => setPresupuesto(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Muestra</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="muestra"
                                    placeholder="Muestra"
                                    name="muestra"
                                    value={muestra}
                                    onChange={(e) => setMuestra(e.target.value)}
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
                                    placeholder="Fecha Inicio de la medicion"
                                    name="fecha_inicio"
                                    value={fechaInicio}
                                    onChange={(e) => setFechaInicio(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label class="form-label">Fecha finalizacion</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="fecha_fin"
                                    placeholder="Fecha de finalizacion"
                                    name="fecha_fin"
                                    value={fechaFin}
                                    onChange={(e) => setFechaFin(e.target.value)}
                                />
                            </div>
                        </div>
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
                                <th scope="col">Id medicion</th>
                                <th scope="col">Id proyecto</th>
                                <th scope="col">Email cliente</th>
                                <th scope="col">Responsable conocimiento</th>
                                <th scope="col">Numero contrato</th>
                                <th scope="col">NIT proveedor</th>
                                <th scope="col">Muestra</th>
                                <th scope="col">Fecha inicio</th>
                                <th scope="col">Fecha finalizacion</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id_medicion}>
                                    <td>{item.id_medicion}</td>
                                    <td>{item.id_proyecto_historico}</td>
                                    <td>{item.email_cliente}</td>
                                    <td>{item.responsable_conocimiento}</td>
                                    <td>{item.no_contrato}</td>
                                    <td>{item.nit_proveedor}</td>
                                    <td>{item.muestra}</td>
                                    <td>{new Date(item.fecha_inicio).toISOString().split('T')[0]}</td>
                                    <td>{new Date(item.fecha_fin).toISOString().split('T')[0]}</td>
                                    <td>
                                        <button
                                            type="submit"
                                            className="btn red"
                                            id="areaButton"
                                            onClick={(event) => handelDeleteMedicion(event, item.id_medicion)}
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

export default Medicion