import Reac, { useState, useEffect } from "react";
import axios from "axios";

function TotalProyectos() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchDat();
    }, [])

    async function fetchDat() {
        try {
            const response = await axios.get("http://localhost:5000/totalProyectos")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="one">
            <h1>Total de proyectos</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.total_proyectos}>
                            <td>{item.total_proyectos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default TotalProyectos;