import React, { useContext } from "react";
import { Box, Slider, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SliderContext from "./SliderContext";
import { styled } from "@mui/system";

const StyledAccordion = styled(Accordion)({
  backgroundColor: "transparent",
  color: "white",
  width: "100%",
  boxShadow: "none", // This line removes the box shadow
});

function SliderContainer({ name, desc }) {
  const [value, setValue] = React.useState(0);
  const { values, setValues } = useContext(SliderContext);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setValues({ ...values, [name]: newValue });
  };

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
