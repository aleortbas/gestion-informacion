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
    const navigate = useNavigate()

    const handleSubmitLogin = async (event, endpoint) => {
        event.preventDefault();

        try {
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
    };

    const handleSigninClick = () => {
        setShowNameField(false);
        setShowSignupButton(true);
        setShowSigninButton(false);
    };

    return (
        <div className="container-login">
            <div className="form-box">
                <h1>{showNameField ? "Registrarse" : "Iniciar sesión"}</h1>
                <form onSubmit={(event) => handleSubmitLogin(event, "auth")}>
                    {showNameField && (
                        <div className="input-field" id="nameField">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder="Name" />
                        </div>
                    )}
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
                            type="button"
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
