import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

function Proveedor() {

    const [data, setData] = useState([]);
    const [showElement, setShowElement] = useState(null)
    const [nit, setNit] = useState(null)
    const [nombre_proveedor, setNombreProveedor] = useState(null)
    const [email_proveedor, setEmailProveedor] = useState(null)
    const [telefono_proveedor, setTelefonProveedor] = useState(null)

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
        setTelefonProveedor(item.telefono_proveedor);

        console.log(item)
    }

    return (
        <div className="container-fluid proveedor-container">
            <div className="row">
                <div className="col-4 d-flex align-items-center">
                    <form method="post" onSubmit={(event) => handleSubmitProveedor(event, "anadirProveedor")}>
                        <div className="form-group">
                            <label>NIT</label>
                            <input type="text" className="form-control" name="nit" id="nit" placeholder="NIT" onChange={(e) => setNit(e.target.value)} />
                            <small className="form-text text-muted">Numero de identificacion tributaria</small>
                        </div>
                        <div className="form-group">
                            <label>Nombre del proveedor</label>
                            <input type="text" className="form-control" name="nombre_proveedor" id="nombre_proveedor" placeholder="Nombre proveedor" onChange={(e) => setNombreProveedor(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Correo electronico del proveedor</label>
                            <input type="email" className="form-control" name="email_proveedor" id="email_proveedor" placeholder="Email proveedor" onChange={(e) => setEmailProveedor(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Numero telefono o celular</label>
                            <input type="number" className="form-control" name="telefono_proveedor" id="telefono_proveedor" placeholder="Numero de contacto" onChange={(e) => setTelefonProveedor(e.target.value)} />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="btn btn-paginas" id="agregar">
                                Agregar
                            </button>
                            <button type="submit" className="btn btn-paginas" id="cancelar">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <div className="table-container">
                        <table className="table table-border table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">NIT</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Abreviatura</th>
                                    <th scope="col">Correo electronico</th>
                                    <th scope="col">telefono o celular</th>
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
                {showElement && (
                    <div className="row">
                        <div className="col-12">
                            <form method="post" onSubmit={(event) => handleSubmitProveedor(event, "editarProveedor")}>
                                <div className="form-group">
                                    <label>NIT</label>
                                    <input type="text" className="form-control" name="nit" id="nit" placeholder="NIT" value={nit} onChange={(e) => setNit(e.target.value)} />
                                    <small className="form-text text-muted">Numero de identificacion tributaria</small>
                                </div>
                                <div className="form-group">
                                    <label>Nombre del proveedor</label>
                                    <input type="text" className="form-control" name="nombre_proveedor" id="nombre_proveedor" placeholder="Nombre proveedor" value={nombre_proveedor} onChange={(e) => setNombreProveedor(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Correo electronico del proveedor</label>
                                    <input type="email" className="form-control" name="email_proveedor" id="email_proveedor" placeholder="Email proveedor" value={email_proveedor} onChange={(e) => setEmailProveedor(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Numero telefono o celular</label>
                                    <input type="number" className="form-control" name="telefono_proveedor" id="telefono_proveedor" placeholder="Numero de contacto" value={telefono_proveedor} onChange={(e) => setTelefonProveedor(e.target.value)} />
                                </div>
                                <div className="button-container">
                                    <button type="submit" className="btn btn-paginas" id="editar">
                                        Editar
                                    </button>
                                    <button type="submit" className="btn btn-paginas" id="cancelar">
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Proveedor