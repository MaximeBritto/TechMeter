import React from 'react';
import { Box, Slider, Stack } from "@mui/material";
import reactLogo from "../assets/react.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SliderContainer({ name, desc }) {
  const [value, setValue] = React.useState(0);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", cursor: "pointer" }} />
              }
              style={{ cursor: "default", color: "white" }}
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
                <p style={{ fontSize: "1.2rem" }}>{name}</p>
                <img src={reactLogo} alt="react logo" />
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
          </Accordion>
        </Box>
        <div>Slider value: {value}</div>
      </Stack>
    </>
  );
}

export default SliderContainer;
