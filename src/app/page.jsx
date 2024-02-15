'use client';

// import { use, useEffect } from 'react';
// import Link from 'next/link';
// import BarChart from './components/BarChart.jsx';
// import TechnosList from './components/TechnosList.jsx';
// import Data from "../app/assets/datas/Data.json";
// import Constant from './assets/constants/Constants.jsx';
// import techmeterLogo from "./assets/techmeter-logo.svg";
// import { supabase } from "./supabase.jsx";
// import { useAuth } from "./utils/context/AuthContext.jsx";

// const HomePage = () => {
//     console.log(useAuth());
//     const email = JSON.parse(localStorage.getItem('email'));
//     const Auth = useAuth();

//     useEffect(() => {
//     }, [email]);




//     const logout = async () => {
//         try {
//             await supabase.auth.signOut();
//             console.log('Utilisateur déconnecté avec succès.');
//         } catch (error) {
//             console.error('Erreur lors de la déconnexion :', error.message);
//         }
//     }
//     if (!Auth) {
//         return <p>Pas de Auth</p>;
//     }
//     // Vérifiez si data est défini avant de le déstructurer
//     if (!Auth?.data) {
//         // Si data n'est pas encore disponible, affichez un message de chargement ou redirigez l'utilisateur vers la page de connexion
//         return <p>Chargement...</p>;
//     }

//     // Maintenant que data est défini, vous pouvez déstructurer la propriété user
//     const userEmail = data.user?.email || email;

//     return (
//         <div className='container-homePage' style={{ margin: "0 auto", maxWidth: "100rem", padding: "2rem 5%" }}>
//             <div className='flex justify-between'>
//                 <img src={techmeterLogo} alt="Techmeter logo" style={{ width: "15rem", marginBottom: "2rem" }} />
//                 <button className="auth-button" name={Constant.LOGOUT} onClick={logout}>{Constant.LOGOUT}</button>
//             </div>
//             <div style={{ margin: "2rem 0" }}>
//                 <div style={{ marginBottom: "50px" }}>
//                     <h1>{userEmail}</h1>
//                     <span style={{ textDecoration: "underline" }}> A4 Fullstack</span>
//                 </div>
//                 <BarChart datas={Data} />
//             </div>
//             <div className='container-technosList'>
//                 {/* Using Link for navigation */}
//                 <Link href="/details/[name]" as="/details/some-name">
//                     <a>Go to Details Page</a>
//                 </Link>
//                 <TechnosList />
//             </div>
//         </div>
//     )
// };

// export default HomePage;



// import { useEffect } from 'react';
// import Link from 'next/link';
// import BarChart from './components/BarChart.jsx';
// import TechnosList from './components/TechnosList.jsx';
// import Data from "../app/assets/datas/Data.json";
// import Constant from './assets/constants/Constants.jsx';
// import techmeterLogo from "./assets/techmeter-logo.svg";
// import { supabase } from "./supabase.jsx";
// import { useAuth } from "./utils/context/AuthContext.jsx";

// const HomePage = () => {
//     console.log(useAuth());
//     const Auth = useAuth();
//     const email = JSON.parse(localStorage.getItem('email'));

//     useEffect(() => {
//     }, [email]);

//     const logout = async () => {
//         try {
//             await supabase.auth.signOut();
//             console.log('Utilisateur déconnecté avec succès.');
//         } catch (error) {
//             console.error('Erreur lors de la déconnexion :', error.message);
//         }
//     }

//     if (!Auth) {
//         return <p>Pas de Auth</p>;
//     }

//     if (Auth.loading) {
//         return <p>Chargement...</p>;
//     }

//     if (!Auth.user) {
//         return <p>Utilisateur non connecté</p>;
//     }

//     const userEmail = Auth.user.email || email;

//     return (
//         <div className='container-homePage' style={{ margin: "0 auto", maxWidth: "100rem", padding: "2rem 5%" }}>
//             <div className='flex justify-between'>
//                 <img src={techmeterLogo} alt="Techmeter logo" style={{ width: "15rem", marginBottom: "2rem" }} />
//                 <button className="auth-button" name={Constant.LOGOUT} onClick={logout}>{Constant.LOGOUT}</button>
//             </div>
//             <div style={{ margin: "2rem 0" }}>
//                 <div style={{ marginBottom: "50px" }}>
//                     <h1>{userEmail}</h1>
//                     <span style={{ textDecoration: "underline" }}> A4 Fullstack</span>
//                 </div>
//                 <BarChart datas={Data} />
//             </div>
//             <div className='container-technosList'>
//                 {/* Using Link for navigation */}
//                 <Link href="/details/[name]" as="/details/some-name">
//                     <a>Go to Details Page</a>
//                 </Link>
//                 <TechnosList />
//             </div>
//         </div>
//     )
// };

// export default HomePage;


import React from 'react';
import HomePage from './components/HomePage';
import { AuthContextProvider } from './utils/context/AuthContext';

const Page = () => {
    return (
        <AuthContextProvider>
        <div>
            <HomePage />
        </div>
        </AuthContextProvider>
    );
};

export default Page;
