import React, { useState, useEffect } from "react";
import axios from "axios";

function ProveedorMasSolicitado() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchDat();
    }, [])

    async function fetchDat() {
        try {
            const response = await axios.get("http://localhost:5000/proveedorMasSolicitado")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="one">
            <h1>Proveedor mas solicitado</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre del proveedor</th>
                        <th>Email proveedor</th>
                        <th>NIT</th>
                        <th>Conteo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.nombre_proveedor}>
                            <td>{item.nombre_proveedor}</td>
                            <td>{item.email_proveedor}</td>
                            <td>{item.nit_proveedor}</td>
                            <td>{item.conteo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default ProveedorMasSolicitado;