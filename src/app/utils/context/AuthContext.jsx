import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from "../../supabase";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const session = supabase.auth.session();
            if (session) {
                setUser(session.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération de l'utilisateur :", error);
        } finally {
            setLoading(false);
            console.log("Contexte initialisé :", { user, loading });
        }
    };

    fetchUser();
  }, []); // Modification ici pour empêcher la dépendance de rechargement

  const handleSessionChange = (event, session) => {
      setUser(session.user);
  };

  useEffect(() => {
      const { data } = supabase.auth.onAuthStateChange(handleSessionChange);

      return () => {
          if(data && data.unsubscribe) { // Vérification si data et unsubscribe sont définis
            data.unsubscribe();
          }
      };
  }, []);

  console.log("User:", user); // Ajout du console.log pour user
  console.log("Loading:", loading); // Ajout du console.log pour loading

  return (
      <AuthContext.Provider value={{ user, loading }}>
          {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export { AuthContextProvider };
