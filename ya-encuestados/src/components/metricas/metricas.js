import React from "react";
import axios from "axios";

function Metricas() {
    return (
        <div className="card">
            <div className="title">Metricas</div>
            <div className="form">
                <label><input type="radio" class="input-radio" name="pilih" /> OFF</label>
                <label><input type="radio" class="input-radio" checked name="pilih" /> ON</label>
                <label><input type="radio" class="input-radio" name="pilih" /> OFF</label>
                <label><input type="radio" class="input-radio" checked name="pilih" /> ON</label>
                <label><input type="radio" class="input-radio" name="pilih" /> OFF</label>
                <label><input type="radio" class="input-radio" checked name="pilih" /> ON</label>
                <label><input type="radio" class="input-radio" name="pilih" /> OFF</label>
                <label><input type="radio" class="input-radio" checked name="pilih" /> ON</label>
                <label><input type="radio" class="input-radio" checked name="pilih" /> ON</label>
            </div>
        </div>
    );
}

export default Metricas;
