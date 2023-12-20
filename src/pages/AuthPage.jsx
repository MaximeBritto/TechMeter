import React, { useState } from 'react';
import Login from '../composant/server/login.jsx';
import SignUp from '../composant/server/signUp.jsx';
import '../index.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <div className="auth-container">
            <div className="toggle-buttons">
                <a className={`auth-title ${isLogin ? 'selected' : ''}`} onClick={toggleAuthMode}>
                    Login
                </a>
                <a className={`auth-link ${!isLogin ? 'selected' : ''}`} onClick={toggleAuthMode}>
                    Sign Up
                </a>
            </div>

            <div>
                {isLogin ? (
                    <Login onToggleAuthMode={toggleAuthMode} />
                ) : (
                    <SignUp onToggleAuthMode={toggleAuthMode} />
                )}
            </div>
        </div>
    );
};

export default AuthPage;
