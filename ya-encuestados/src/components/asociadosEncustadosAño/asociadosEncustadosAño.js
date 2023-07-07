import React, { useState, useEffect } from "react";
import axios from "axios";

function AsociadosEncuestdosAños() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchDat();
    }, [])

    async function fetchDat() {
        try {
            const response = await axios.get("http://localhost:5000/asociadosEncuestdosAños")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="one">
            <h1>Asociados encuestdos 2022</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Cantidad documentos</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.cantidad_documentos}>
                            <td>{item.cantidad_documentos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default AsociadosEncuestdosAños;