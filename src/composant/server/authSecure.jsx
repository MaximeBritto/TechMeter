import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { supabase } from "../../supabase";

const  AuthSecure = async ({children }) => {
    const navigate = useNavigate();
    const accesToken = await supabase?.auth?.getSession()?.access_token;
   
console.log(accesToken);
    useEffect(() => {
        if (accesToken !== undefined) {
            return  navigate("/");
        } else {
            // navigate("/login");
             console.log(accesToken);
            }
    }, []);

 
        return children;
   

    
};

export default AuthSecure;
