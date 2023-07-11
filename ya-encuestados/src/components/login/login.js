import React, { useState } from "react";

function Login() {
    const [showNameField, setShowNameField] = useState(false);
    const [showSignupButton, setShowSignupButton] = useState(true);
    const [showSigninButton, setShowSigninButton] = useState(true);

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
                <form>
                    {showNameField && (
                        <div className="input-field" id="nameField">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder="Name" />
                        </div>
                    )}
                    <div className="input-field">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <i className="fa-solid fa-user"></i>
                        <input type="password" placeholder="Password" />
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
                            type="button"
                            className="signin-button"
                            onClick={handleSigninClick}
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
