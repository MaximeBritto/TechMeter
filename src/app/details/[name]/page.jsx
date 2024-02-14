"use client";

import React, { useState } from "react";
import SliderContainer from "../../components/SliderContainer.jsx";
import Bareme from "../../components/bareme.jsx";
import TechSummary from "../../components/TechSummary.jsx";
import techmeterLogo from "../../assets/techmeter-logo.svg"; 
import ButtonGeneric from "../../components/ButtonGeneric.jsx";
import Link from "next/link";
import Constant from "../../assets/constants/Constants.jsx";
import SliderContext from "../../components/SliderContext.js";
import Image from "next/image";
import LogoutButton from "@/app/components/server/Logout.jsx";

const DetailsPage = () => {
    const [values, setValues] = useState({});

    return (
        <div style={{margin: "0 auto", maxWidth: "100rem", padding: "2rem 5%"}}>
            <div className='flex justify-between'>
                <Image width={50} height={50} src={techmeterLogo} alt="Techmeter logo" style={{width: "15rem", marginBottom: "2rem"}}/>
                <LogoutButton />
            </div>
            <Link href="/">
                    <ButtonGeneric name={Constant.RETURN} />
            </Link>
            <h1 style={{color: "#61DAFB", marginBottom: "1.5rem"}}>Techno</h1>
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