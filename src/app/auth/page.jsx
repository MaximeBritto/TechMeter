'use client';

import React, { useState } from 'react';
import Login from '../components/server/login.jsx';
import SignUp from '../components/server/signUp.jsx';
import techmeterLogo from "../assets/techmeter-logo.svg";
import Link from 'next/link';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <div className='w-screen'>
            <img src={techmeterLogo} alt="Techmeter logo" style={{ width: "15rem", margin: "2rem" }} />
            <div className="auth-container">
                <div className="toggle-buttons">
                    <a className={`auth-title ${isLogin ? 'selected' : ''}`} onClick={toggleAuthMode}>
                        Connexion
                    </a>
                    <a className={`auth-link ${!isLogin ? 'selected' : ''}`} onClick={toggleAuthMode}>
                        Inscription
                    </a>
                </div>

                <div>
                    {isLogin ? (
                        <Login />
                    ) : (
                        <SignUp />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
