import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
    const [showNameField, setShowNameField] = useState(false);
    const [showSignupButton, setShowSignupButton] = useState(true);
    const [showSigninButton, setShowSigninButton] = useState(true);

    const [emailAuth, setEmail] = useState(null);
    const [passwordAuth, setPassword] = useState("");
    const [nombre, setNombre] = useState(null);
    const [nombrePuesto, setNombrePuesto] = useState(null);
    const [codigoArea, setCodigoArea] = useState(null);
    const [isSignup, setIsSignup] = useState(false); // New state for sign up or sign in
    const navigate = useNavigate()

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        try {
            const endpoint = isSignup ? "registro" : "auth"; // Determine the endpoint based on the isSignup state
            const res = await axios.post(`http://localhost:5000/${endpoint}`, {
                email: emailAuth,
                password: passwordAuth,
                nombre: nombre,
                nombrePuesto: nombrePuesto,
                codigoArea: codigoArea
            });
            const loginResponse = res.data;
            console.log("TOKEN", loginResponse);

            if (loginResponse != null) {
                if (endpoint === "auth") {
                    localStorage.setItem("accessToken", loginResponse)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${loginResponse}`;
                    console.log(axios.defaults.headers.common['Authorization'] = `Bearer ${loginResponse}`);
                    navigate("/home")
                    alert("Inicio de sesion exitoso")
                } else if (endpoint === "registro") {
                    navigate("/home")
                    alert("Usuario creado exitosamente")
                }
            } else if (loginResponse === null) {
                alert("Email o contraseña incorrecta, verifique los datos ingresados")
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignupClick = () => {
        setShowNameField(true);
        setShowSignupButton(false);
        setShowSigninButton(true);
        setIsSignup(true); // Set isSignup to true when signing up
    };



    useEffect(() => {
        const wrapper = document.querySelector('.wrapper')
        const loginLink = document.querySelector('.login-link')
        const registerLink = document.querySelector('.register-link')

        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active')
        })

        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active')
        })
    })

    return (
        <div className="wrapper">

            <div className="form-box login">
                <h2>Iniciar sesion</h2>
                <form action="#" onSubmit={handleSubmitLogin}>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-user"></i></span>
                        <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-lock"></i></span>
                        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                        <label>Contraseña</label>
                    </div>
                    <button type="submit" className="btn" id="login">Iniciar sesion</button>
                    <div className="login-register">
                        <p style={{ color: "#495464" }}>No tienes una cuenta<a href="#"
                            className="register-link"> registrate</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <h2>Registro</h2>
                <form action="#" onSubmit={handleSubmitLogin}>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-user"></i></span>
                        <input type="text" placeholder="Nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} required />
                        <label>Nombre</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                        <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-lock"></i></span>
                        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                        <label>Contraseña</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-pen-fancy"></i></span>
                        <input type="text" placeholder="Nombre del puesto" name="nombrePuesto" onChange={(e) => setNombrePuesto(e.target.value)} required />
                        <label>Nombre puesto</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-user"></i></span>
                        <select style={{ color: "#495464" }} className="custom-select" name="codigoArea" onChange={(e) => setCodigoArea(e.target.value)}>
                            <option value="10051">10051</option>
                            <option value="10145">10145</option>
                            <option value="10150">10150</option>
                            <option value="10211">10211</option>
                            <option value="10238">10238</option>
                            <option value="10574">10574</option>
                        </select>
                        <label>Codigo area</label>
                    </div>
                    <button type="submit" className="btn" id="login" onClick={handleSignupClick}>Crear cuenta</button>
                    <div className="login-link">
                        <p style={{ color: "#495464" }}>Ya tienes una<a href="#"
                            className="register-link"> cuenta</a></p>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login;
