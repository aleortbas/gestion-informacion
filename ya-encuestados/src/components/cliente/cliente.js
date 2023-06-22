import React, { useState, useEffect } from "react"
import axios from "axios"

function Cliente() {

    const [data, setData] = useState([]);
    const [email_cliente, setEmailCliente] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/cliente")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitCliente = async (event, endpoint) => {

        event.preventDefault();

        try {
            let res = await axios.post(`http://localhost:5000/${endpoint}`, {
                email_cliente: email_cliente,
            });
            if (res.status === 200) {
                email_cliente("");
            } else {
                console.log("MALOOOOO MALOOOOO");
            }
        } catch (error) {

        }
    }

    const handleDelete = async (event, email_cliente) => {
        try {
            let res = await axios.delete(`http://localhost:5000/eliminarCliente/${email_cliente}`)
            if (res.status === 200) {
                email_cliente("");
            } else {
                console.log("MALOOOOO MALOOOOO");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container-fluid cliente-container">
            <div className="row">
                <div className="col-4 d-flex align-items-center">
                    <form method="post" onSubmit={(event) => handleSubmitCliente(event, "anadiCliente")}>
                        <div class="form-group">
                            <label><b>Email corporativo</b></label>
                            <input type="email" class="form-control" name="email_cliente" id="email_cliente" placeholder="Ingrese su correo corporativo"
                                onChange={(e) => setEmailCliente(e.target.value)}
                                style={{ width: "350px" }} />
                            <button
                                type="submit"
                                class="btn orange"
                                id="areaButton"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-8">
                    <div className="table-container">
                        <table className="table table-border table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Email cliente</th>
                                    <th scope="col">Nombre Responsable</th>
                                    <th scope="col">Codigo puesto</th>
                                    <th scope="col">Nombre puesto</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.email_cliente}>
                                        <td>{item.email_cliente}</td>
                                        <td>{item.nombre_cliente}</td>
                                        <td>{item.cod_puesto}</td>
                                        <td>{item.nombre_puesto}</td>
                                        <td>
                                            <button
                                                type="submit"
                                                class="btn red"
                                                id="areaButton"
                                                onClick={(event) => handleDelete(event, item.email_cliente)}
                                            >
                                                Elimnar
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

export default Cliente;