import React, { useState } from "react";
import axios from "axios";
import cargoSolicitado from "../cargoSolicitado/cargoSolicitado";
import SubareaSolicitado from "../subareaSolicitante/subareaSolicitante";
import TotalProyectos from "../totalProyectos/totalProyectos";
import TotalMediciones from "../totalMediciones/totalMediciones";
import ProyectoMasMediciones from "../proyectoMasMediciones/proyectoMasMediciones";
import PeriodicidadRepetida from "../periodicidadRepetida/periodicidadRepetida";
import AsociadosEncuestdosAños from "../asociadosEncustadosAño/asociadosEncustadosAño";
import ProveedorMasSolicitado from "../proveedorMasSolicitado/proveedorMasSolicitado";

const componentMapping = {
    cargoSolicitado: cargoSolicitado,
    subareaSolicitante: SubareaSolicitado,
    totalProyectos: TotalProyectos,
    totalMediciones: TotalMediciones,
    proyectoMasMediciones: ProyectoMasMediciones,
    periodicidadRepetida: PeriodicidadRepetida,
    asociadosEncuestdosAños: AsociadosEncuestdosAños,
    proveedorMasSolicitado: ProveedorMasSolicitado
}

function Metricas() {

    const [action, setAction] = useState("")

    const onActionChange = e => {
        setAction(e.target.value)
    }

    const SelectedComponent = componentMapping[action]

    return (
        <div className="wrapper">
            <div class="one">
                <div className="">
                    <div className="title">Metricas</div>
                    <div className="form">
                        <ul>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="subareaSolicitante" checked={action === "subareaSolicitante"} onChange={onActionChange} /> Subarea mas solicitante de proyectos</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="totalMediciones" checked={action === "totalMediciones"} onChange={onActionChange} /> Total de mediciones </label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="proyectoMasMediciones" checked={action === "proyectoMasMediciones"} onChange={onActionChange} /> Proyecto con mas mediciones </label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="periodicidadRepetida" checked={action === "periodicidadRepetida"} onChange={onActionChange} /> Periodicidad mas repetida</label>  </li>
                            <li><label><input type="radio" class="input-radio on" name="pilih" value="proveedorMasSolicitado" checked={action === "proveedorMasSolicitado"} onChange={onActionChange} /> Proveedor mas solicitado</label>  </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="two">
                {SelectedComponent && <SelectedComponent />}
            </div>
        </div>
    );
}

export default Metricas;
