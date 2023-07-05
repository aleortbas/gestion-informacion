import React, { useState, useEffect } from "react";
import axios from "axios";

function SubareaSolicitado() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/subareaSolicitado")
            setData(response.data)
            console.log("RESPUESTA", response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="one">
            <h1>Subarea</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID subarea</th>
                        <th>Nombre subarea</th>
                        <th>Cantidad de proyectos</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.nombre_subarea}>
                            <td>{item.nombre_subarea}</td>
                            <td>{item.id_subarea}</td>
                            <td>{item.proyectos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SubareaSolicitado