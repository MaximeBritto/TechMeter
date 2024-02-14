import { supabase } from "../../supabase";
import Link from 'next/link';
import { useState } from 'react';
import Constant from '../../assets/constants/Constants';

const LogoutButton = () => {
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        setLoading(true);
        try {
            await supabase.auth.signOut();
            console.log('Utilisateur déconnecté avec succès.');
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Link href="/auth" passHref>
            <button className='auth-button' name={Constant.LOGOUT} onClick={logout} disabled={loading}>
                {loading ? 'Déconnexion...' : 'Déconnexion'}
            </button>
        </Link>
    );
};

export default LogoutButton;
