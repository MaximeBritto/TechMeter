import React, { useContext , useState} from "react";
import { Box, Slider, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SliderContext from "./SliderContext";
import { styled } from "@mui/system";
import { supabase } from '../supabase';

const StyledAccordion = styled(Accordion)({
  backgroundColor: "transparent",
  color: "white",
  width: "100%",
  boxShadow: "none", // This line removes the box shadow
});

function SliderContainer({ uuid , name = "props", desc = "descProps", cmValue }) {
  const [value, setValue] = useState(cmValue || 0);
  //const { values, setValues } = useContext(SliderContext);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //setValues({ ...values, [name]: newValue });
  };

  const handleSave = async () => {
    console.log("value", value);

    try {
        let { data, error } = await supabase
            .from('UserCompetenceModuleTable')
            .update({cmValue: value})
            .eq('uuid', uuid);

        if (error) {
            console.error(error);
        } else {
            // Assigner la valeur de 'value' à 'data'
            data = value;
            console.log("dataSave", data);
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la sauvegarde :", error);
    }
}



  return (
    <>
      <Stack style={{ border: "1px solid #ccc", width: "100%" }}>
        <Box
          style={{
            display: "flex",
            width: "100%",
            padding: "1rem 2rem",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <StyledAccordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", cursor: "pointer"}} />
              }
              style={{
                cursor: "default",
                color: "white",
                flexDirection: "row-reverse",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "50px",
                  width: "30%",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <p style={{ fontSize: "1.2rem", marginLeft: "2rem"  }}>{name}</p>
              </Box>
              <Slider
                style={{ width: "70%", marginRight: "20px" }}
                aria-label="Temperature"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={5}
                onClick={(e) => e.stopPropagation()}
                value={value}
                onChange={handleChange}
              />
                 <button className="saveButton" onClick={handleSave}>
                Save
                </button>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{desc}</Typography>
            </AccordionDetails>
          </StyledAccordion>
        </Box>
      </Stack>
    </>
  );
}

export default SliderContainer;
