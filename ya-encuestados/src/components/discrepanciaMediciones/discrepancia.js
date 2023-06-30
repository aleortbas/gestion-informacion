import React, { useState } from "react";
import axios from "axios";

function Discrepancia() {
    return (
        <div className="one">
            <h1>Discrepancia</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Discrepancia;
