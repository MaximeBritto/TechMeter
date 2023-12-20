import BarChart from '../composant/BarChart.jsx';
import TechnosList from '../composant/TechnosList.jsx';
import Data from "../assets/datas/Data.json";
import ButtonGeneric from '../composant/ButtonGeneric.jsx';
import Constant from '../assets/constants/Constants.jsx';
import '../assets/styles/homePage/HomePage.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HomePage = () => {

    const onCLick = () => {
        console.log('click');
    }

    const buttonStyle = {
        background: "transparent",
        color: "white",
        border: "1px solid white",
        width: "65px",
        height: "20px",
        cursor: "pointer",
    }
   
    return(
        <div className='container-homePage'>
            <h1>TechMeter</h1>
            <BarChart technos={Data}/>
            <div className='container-technosList'>
                <ButtonGeneric onClick={onCLick} name={Constant.ADD_TECHNO} style={buttonStyle}/>
                <TechnosList technos={Data}/>
            </div>
        </div>
    )
};

export default HomePage;