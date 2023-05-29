import React, { useState, useEffect } from "react";
import axios from "axios";

function Area() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/area");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>AREA</h2>
      {data.map((item) => (
        <p key={item.id_subarea}>{item.nombre_empresa}</p>
      ))}
    </div>
  );
}

export default Area;
