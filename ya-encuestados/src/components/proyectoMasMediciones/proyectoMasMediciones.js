import React, { useEffect, useState } from "react";
import axios from "axios";

function ProyectoMasMediciones() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/proyectoMasMediciones")
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="one">
            <h1>Total de mediciones por proyecto </h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID proyecto</th>
                        <th>Nombre del proyecto</th>
                        <th>Total de mediciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id_proyecto_historico}>
                            <td>{item.id_proyecto_historico}</td>
                            <td>{item.nombre_proyecto}</td>
                            <td>{item.total_mediciones}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default ProyectoMasMediciones;