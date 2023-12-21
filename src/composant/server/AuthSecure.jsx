import { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { supabase } from "../../supabase"; 

// eslint-disable-next-line react/prop-types
const AuthSecure = ({ children }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const checkAuth = async () => {
        try {
            const authenticated = await supabase.auth.getUser()
            if (authenticated?.data?.user === null) {
            navigate('/login');
          } else {
            setIsLoading(false);
            navigate("/");
          }
        } catch (error) {
          console.error("Erreur lors de la vérification de l'authentification :", error);
        }
      };
  
      checkAuth();
    }, [navigate]);
  
    if (isLoading) {
      return <p>Vérification de l'authentification...</p>;
    }
    return children;
  };

  export default AuthSecure;    