import SliderContainer from "../composant/SliderContainer";
import { Box } from "@mui/material";

const DetailsPage = () => {

    return(
        <div>
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