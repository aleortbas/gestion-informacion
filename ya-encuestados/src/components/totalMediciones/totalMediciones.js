import React, { useState, useEffect } from "react";
import axios from "axios";

function TotalMediciones() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/totalMediciones")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="one">
            <h1>Total de mediciones</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Total mediciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.total_mediciones}>
                            <td>{item.total_mediciones}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TotalMediciones;