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
import SliderContext from "../components/SliderContext.js";
import Image from "next/image";

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
                <Image width={50} height={50} src={techmeterLogo} alt="Techmeter logo" style={{width: "15rem", marginBottom: "2rem"}}/>
                <button className="auth-button" name={Constant.LOGOUT} onClick={logout}>{Constant.LOGOUT}</button>                
            </div>
            <Link href="/">
                    <ButtonGeneric name={Constant.RETURN} />
            </Link>
            <Bareme/>
            <SliderContext.Provider value={{ values, setValues }}>
                <SliderContainer name="Composant" desc="Les composants sont les blocs de construction de l'interface utilisateur dans React. Ils peuvent être de deux types : fonctionnels (stateless) ou de classe (stateful)." />
                <SliderContainer name="JSX" />
                <SliderContainer name="Props" />
                <SliderContainer name="Cycle de vie" />
                <SliderContainer name="Hooks" />
                <SliderContainer name="Evènement" />
                <TechSummary />
            </SliderContext.Provider>
            
        </div>
    );
};

export default DetailsPage;
