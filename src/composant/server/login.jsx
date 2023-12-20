import React, { useState } from 'react';
import { supabase } from '../../supabase';
import { useNavigate } from 'react-router-dom';

const Login = ({ onToggleAuthMode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            console.error('Error signing in:', error.message);
        } else {
            navigate('/');
            console.log('User signed in successfully:', data);
            // todo add redirect
        }
    };

    return (
        <div className="form-container">
            <input
                className='input-log'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className='input-log'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="auth-button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
