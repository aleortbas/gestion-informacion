import React, { useState } from "react";
import axios from "axios";
import Discrepancia from "../discrepanciaMediciones/cargoSolicitado";
import SubareaSolicitado from "../subareaSolicitante/subareaSolicitante";

function Metricas() {

    const [action, setAction] = useState("")

    const onActionChange = e => {
        setAction(e.target.value)
    }

    return (
        <div className="wrapper">
            <div class="one">
                <div className="">
                    <div className="title">Metricas</div>
                    <div className="form">
                        <ul>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="discrepancia" checked={action === "discrepancia"} onChange={onActionChange} /> Cargo mas solicitante de proyectos</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="subareaSolicitante" checked={action === "subareaSolicitante"} onChange={onActionChange} /> Subarea mas solicitante de proyectos</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="numeroSubarea" checked={action === "numeroSubarea"} onChange={onActionChange} /> Numero de subareas repetidas</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="proveedorSolicitado" checked={action === "proveedorSolicitado"} onChange={onActionChange} /> Proveedor mas solicitado </label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="subareaMasProyectos" checked={action === "subareaMasProyectos"} onChange={onActionChange} /> Subarea con mas proyectos</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="proyectoAntiguo" checked={action === "proyectoAntiguo"} onChange={onActionChange} /> Proyecto mas antiguo</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="medicionAntigua" checked={action === "medicionAntigua"} onChange={onActionChange} /> Medicion mas antigua</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="mayorMedicion" checked={action === "mayorMedicion"} onChange={onActionChange} /> Orden descente de proyectos por mediciones</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="subareaMasMediciones" checked={action === "subareaMasMediciones"} onChange={onActionChange} /> Subarea con mas mediciones</label>  </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="two">
                {action === "discrepancia" && <Discrepancia />}
                {action === "subareaSolicitante" && <SubareaSolicitado />}
            </div>
        </div>
    );
}

export default Metricas;
