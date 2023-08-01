import React, { useState, useEffect } from "react";
import axios from "axios";

function Discrepancia() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/cargoSolicitado")
            setData(response.data)
            console.log("RESPUESTA", response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="one">
            <h1>Cargo</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Año</th>
                        <th>Nombre puesto</th>
                        <th>Cantidad de proyectos</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.año}>
                            <td>{item.año}</td>
                            <td>{item.nombre_puesto}</td>
                            <td>{item.cantidad_proyectos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Discrepancia;
