import { useState } from 'react';
import { supabase } from '../../supabase';
import { useRouter } from 'next/router';

const SignUp = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({ email, password });
            if (error) {
                throw error;
            }
    
            console.log('User signed up:', data);
            router.push('/login');
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
