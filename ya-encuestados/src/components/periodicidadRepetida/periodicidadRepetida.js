import React, { useState, useEffect } from "react";
import axios from "axios";

function PeriodicidadRepetida() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchDat();
    }, [])

    async function fetchDat() {
        try {
            const response = await axios.get("http://localhost:5000/periodicidadRepetida")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="one">
            <h1>Conteo de la periodicdad</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Periodicidad</th>
                        <th>Conteo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.periodicidad}>
                            <td>{item.periodicidad}</td>
                            <td>{item.conteo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default PeriodicidadRepetida;