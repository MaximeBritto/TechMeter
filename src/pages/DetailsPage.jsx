import ButtonGeneric from "../composant/ButtonGeneric";
import SliderContainer from "../composant/SliderContainer";
import { Box } from "@mui/material";
import Constant from '../assets/constants/Constants';
import { useNavigate } from "react-router";

/**
 * Page de détails d'une technologie, incrémentation de la valeur en pourcentage.
 * @returns La valeur en pourcentage.
 */
const DetailsPage = () => {
     const navigate = useNavigate();

    const buttonStyle = {
        background: "transparent",
        color: "white",
        border: "1px solid white",
        width: "65px",
        height: "20px",
        marginBottom: "2rem",
        cursor: "pointer",
    };

    const navigateToPage = () => {
        navigate("/");
    };

    return(
        <div>
            <ButtonGeneric name={Constant.RETURN} onClick={navigateToPage} style={buttonStyle}/>
            <Box style={{ border: "1px solid #ccc", maxWidth: "90rem", padding: "5%"}}>
                <SliderContainer name="Composant"/>
                <SliderContainer name="JSX" />
                <SliderContainer name="Props" />
                <SliderContainer name="Cycle de vie" />
                <SliderContainer name="Hooks" />
                <SliderContainer name="Evènement" />
                <SliderContainer name="Listes et clés" />
            </Box> 
        </div>
    )
};

export default DetailsPage;