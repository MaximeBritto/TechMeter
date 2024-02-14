import { useState } from 'react';
import { supabase } from '../../supabase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({ email, password });
            if (error) {
                throw error;
            }
            // Handle successful signup
            console.log('User signed up:', data);
            alert('your account has been created, an email has been send')
        } catch (error) {
            console.log('Error signing up:', error);
            alert('error')
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
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="auth-button" onClick={handleSignUp}>
                S'inscrire
            </button>
        </div>
    );
};

export default SignUp;
