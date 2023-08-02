import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
    const [showNameField, setShowNameField] = useState(false);
    const [showSignupButton, setShowSignupButton] = useState(true);
    const [showSigninButton, setShowSigninButton] = useState(true);
    const [accessToken, setAccessToken] = useState(null);
    const [emailAuth, setEmail] = useState(null);
    const [passwordAuth, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(false); // New state for sign up or sign in
    const navigate = useNavigate()

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        try {
            const endpoint = isSignup ? "registro" : "auth"; // Determine the endpoint based on the isSignup state
            const res = await axios.post(`http://localhost:5000/${endpoint}`, {
                email: emailAuth,
                password: passwordAuth,
            });
            const accessToken = res.data;
            if (accessToken != null) {
                navigate("/home")
            } else if (accessToken === null) {
                alert("Email o contraseña incorrecta")
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

    return (
        <div className="container-login">
            <div className="form-box">
                <h1>{showNameField ? "Registrarse" : "Iniciar sesión"}</h1>
                <form onSubmit={handleSubmitLogin}>
                    <div className="input-field">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <i className="fa-solid fa-user"></i>
                        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p>
                        Ha olvidado la contraseña <a href="/">Recuperarla</a>
                    </p>
                    <div className="btn-field">
                        <button
                            type="submit"
                            className="signup-button"
                            onClick={handleSignupClick}
                        >
                            Registrarse
                        </button>
                        <button
                            type="submit"
                            className="signin-button"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
