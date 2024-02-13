"use client";

import React, { useState } from "react";
import SliderContainer from "../components/SliderContainer.jsx";
import Bareme from "../components/bareme.jsx";
import TechSummary from "../components/TechSummary.jsx";
import techmeterLogo from "../assets/techmeter-logo.svg"; 
import ButtonGeneric from "../components/ButtonGeneric.jsx";
import Link from "next/link";
import Constant from "../assets/constants/Constants.jsx";
import { supabase } from "../supabase.jsx";

const DetailsPage = () => {
    const [values, setValues] = useState({});

    const logout = async() =>{
        try {
            await supabase.auth.signOut();
            console.log('Utilisateur déconnecté avec succès.');
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error.message);
        }      
    }

    return (
        <div style={{margin: "0 auto", maxWidth: "100rem", padding: "2rem 5%"}}>
            <div className='flex justify-between'>
                <img src={techmeterLogo} alt="Techmeter logo" style={{width: "15rem", marginBottom: "2rem"}}/>
                <button className="auth-button" name={Constant.LOGOUT} onClick={logout}>{Constant.LOGOUT}</button>                
            </div>
            <Link href="/">
                    <ButtonGeneric name={Constant.RETURN} />
            </Link>
            <Bareme/>
        </div>
    );
};

export default DetailsPage;
