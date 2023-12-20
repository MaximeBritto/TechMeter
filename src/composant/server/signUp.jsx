import React, { useState } from 'react';
import { supabase } from '../../supabase';

const SignUp = ({ onToggleAuthMode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({ email, password });
            if (error) {
                throw error;
            }
            
            console.log('User signed up:', data);
            // todo add redirect
        } catch (error) {
            console.log('Error signing up:', error);
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
            <button className="auth-button" onClick={handleSignUp}>
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;
