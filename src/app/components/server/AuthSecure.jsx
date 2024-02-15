import { useEffect, useState } from 'react'; 
import { useRouter } from 'next/router';
import { supabase } from "../../supabase"; 
import Constant from '../../assets/constants/Constants';
import localStorage from 'local-storage';

// eslint-disable-next-line react/prop-types
const AuthSecure = ({ children }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const checkAuth = async () => {
        try {
            const authenticated = await supabase.auth.getUser()
            if (authenticated?.data?.user === null) {
            router.push('/login');
          } else {
            localStorage.setItem('email', JSON.stringify(authenticated?.data?.user?.email));
            setIsLoading(false);
          }
        } catch (error) {
          console.error(Constant.MESSAGE_ERROR_AUTH, error);
        }
      };
  
      checkAuth();
    }, [router]);
  
    if (isLoading) {
      return <p>{Constant.VERIF_AUTH}</p>;
    }
    return children;
};

export default AuthSecure;
