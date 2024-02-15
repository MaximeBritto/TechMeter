import React from 'react';
import { useAuth } from '../utils/context/AuthContext';
import Link from 'next/link';
import BarChart from './BarChart';
import TechnosList from './TechnosList';
import Data from '../assets/datas/Data.json';
import Constant from '../assets/constants/Constants';
import techmeterLogo from '../assets/techmeter-logo.svg';
import { supabase } from '../supabase';
import Image from 'next/image';
import LogoutButton from './server/Logout';
import localStorage from 'local-storage';

const HomePage = () => {
    console.log(useAuth());
    const Auth = useAuth();
    const email = JSON.parse(localStorage.getItem('email'));

    if (!Auth) {
        return <p>Pas de Auth</p>;
    }

    if (Auth.loading) {
        return <p>Chargement...</p>;
    }

    if (!Auth.user) {
        return <p>Utilisateur non connecté</p>;
    }

    const userEmail = Auth.user.email || email;

    return (
        <div className='container-homePage' style={{ margin: '0 auto', maxWidth: '100rem', padding: '2rem 5%' }}>
            <div className='flex justify-between'>
                <Image width={50} height={50} src={techmeterLogo} alt='Techmeter logo' style={{ width: '15rem', marginBottom: '2rem' }} />
                <LogoutButton />
            </div>
            <div style={{ margin: '2rem 0' }}>
                <div style={{ marginBottom: '50px' }}>
                    <h1>{userEmail}</h1>
                    <span style={{ textDecoration: 'underline' }}> A4 Fullstack</span>
                </div>
                <BarChart datas={Data} />
            </div>
            <div className='container-technosList'>
                {/* Using Link for navigation */}
                <TechnosList />
            </div>
        </div>
    );
};

export default HomePage;
