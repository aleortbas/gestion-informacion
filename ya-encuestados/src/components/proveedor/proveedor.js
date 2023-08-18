import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

function Proveedor() {

    const [data, setData] = useState([]);
    const [showElement, setShowElement] = useState(null)
    const [nit, setNit] = useState(null)
    const [nombre_proveedor, setNombreProveedor] = useState(null)
    const [email_proveedor, setEmailProveedor] = useState(null)
    const [telefono_proveedor, setTelefonoProveedor] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/proveedor")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitProveedor = async (event, endpoint) => {
        event.preventDefault();

        try {
            let res = await axios.post(`http://localhost:5000/${endpoint}`, {
                nit: nit,
                nombre_proveedor: nombre_proveedor,
                email_proveedor: email_proveedor,
                telefono_proveedor: telefono_proveedor
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async (event, email_proveedor) => {
        try {
            let res = await axios.delete(`http://localhost:5000/eliminarProveedor/${email_proveedor}`)
        } catch (error) {
            console.error(error)
        }
    }

    const handleClick = (item) => {
        setShowElement(!showElement);
        setNit(item.nit_proveedor);
        setNombreProveedor(item.nombre_proveedor);
        setEmailProveedor(item.email_proveedor);
        setTelefonoProveedor(item.telefono_proveedor);

        console.log(item)
    }

    const resetForm = () => {
        setNit("");
        setNombreProveedor("");
        setEmailProveedor("");
        setTelefonoProveedor("");
        setShowElement(false)
    }

    return (
        <div className="container-fluid gi-container">
            <div className="row">
                <div div className="col-4 d-flex align-items-center" >
                    <form className="formAnadirProveedor" method="post" onSubmit={(event) => handleSubmitProveedor(event, showElement ? "editarProveedor" : "anadirProveedor")}>
                        <div className="input-box">
                            <input type="text" name="nit" id="nit" placeholder="NIT" value={nit} onChange={(e) => setNit(e.target.value)} readOnly={showElement}
                                required />
                            <label>NIT</label>
                        </div>
                        <div className="input-box">
                            <input type="text" name="nombre_proveedor" id="nombre_proveedor" placeholder="Nombre proveedor" value={nombre_proveedor} onChange={(e) => setNombreProveedor(e.target.value)}
                                required />
                            <label>Nombre del proveedor</label>
                        </div>
                        <div className="input-box">
                            <input type="email" name="email_proveedor" id="email_proveedor" placeholder="Email proveedor" value={email_proveedor} onChange={(e) => setEmailProveedor(e.target.value)}
                                required />
                            <label>Correo electronico del proveedor</label>
                        </div>
                        <div className="input-box">
                            <input type="text" name="telefono_proveedor" id="telefono_proveedor" placeholder="Numero de contacto" value={telefono_proveedor} onChange={(e) => setTelefonoProveedor(e.target.value)}
                                required />
                            <label>Numero de telefono o celular</label>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="btn btn-paginas agregar" id="agregar" disabled={showElement}>
                                Agregar
                            </button>
                            {showElement && (
                                <button type="submit" className="btn btn-paginas agregar" id="editar">
                                    Editar
                                </button>
                            )}
                            <button type="button" className="btn btn-paginas red" id="cancelar" onClick={resetForm}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div >
                <div className="col-8">
                    <div className="table-container">
                        <table className="table table-border table-hover">
                            <thead className="thead">
                                <tr>
                                    <th scope="col">NIT</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Abreviatura</th>
                                    <th scope="col">Correo electronico</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.nit_proveedor}>
                                        <td>{item.nit_proveedor}</td>
                                        <td>{item.nombre_proveedor}</td>
                                        <td>{item.abreviatura_proveedor}</td>
                                        <td>{item.email_proveedor}</td>
                                        <td>{item.telefono_proveedor}</td>
                                        <td>
                                            <button
                                                type="submit"
                                                className="btn red"
                                                id="areaButton"
                                                onClick={(event) => handleDelete(event, item.email_proveedor)}
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
            </div >
        </div >
    )
}

export default Proveedor