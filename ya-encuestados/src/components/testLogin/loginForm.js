import React, { useState } from "react";

function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="form-container">
            <div className={`form-wrapper ${isLogin ? "login" : "register"}`}>
                <h2>{isLogin ? "Login" : "Register"}</h2>
                <form>
                    {isLogin ? (
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                    ) : (
                        <><div className="form-group">
                            <label className="testLabel">Name:</label>
                            <input type="text" />
                        </div><div className="form-group">
                                <label>Email:</label>
                                <input type="email" />
                            </div></>
                    )}
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <button type="submit">{isLogin ? "Login" : "Register"}</button>
                </form>
                <div className="toggle-btn">
                    <button onClick={handleToggleForm}>
                        {isLogin ? "Create an account" : "Already have an account"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
