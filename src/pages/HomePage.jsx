import BarChart from '../composant/BarChart.jsx';
import TechnosList from '../composant/TechnosList.jsx';
import Data from "../assets/datas/Data.json";
import Constant from '../assets/constants/Constants.jsx';
import '../assets/styles/homePage/HomePage.css';
import { useNavigate } from 'react-router';
import techmeterLogo from "../assets/techmeter-logo.svg";

/**
 * Evalution selon le type de technologie.
 * @returns La page d'accueil avec le graphique et la liste des technologies.
 */
const HomePage = () => {
    const navigate = useNavigate();

    const buttonStyle = {
        background: "transparent",
        color: "white",
        border: "1px solid white",
        width: "65px",
        height: "20px",
        cursor: "pointer",
    }

    const navigateToPage = (name) => {
        navigate('/details/' + name, {replace: true});
    }
   
    return(
        <div className='container-homePage' style={{margin: "0 auto", maxWidth: "100rem", padding: "2rem 5%"}}>
            <img src={techmeterLogo} alt="Techmeter logo" style={{width: "15rem", marginBottom: "2rem"}}/>
            <BarChart datas={Data}/>
            <div className='container-technosList'>
                <TechnosList datas={Data} onClick={navigateToPage} style={buttonStyle}/>
            </div>
        </div>
    )
};

export default HomePage;