import { Box, Slider, Stack } from '@mui/material';
import reactLogo from '../assets/react.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SliderContainer({name, desc}) {
  
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
      <Stack style={{ border: '1px solid #ccc', width: '100%' }}>
      <Box style={{ display: 'flex', padding: '2rem 3rem', gap: '2rem', alignItems: 'center' }}>
        <Accordion style={{ backgroundColor: 'transparent', color: 'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ cursor: 'default' }}>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '50px', cursor: 'pointer'}}>
            <p style={{ width: "15rem", fontSize: "1.2rem" }}>{name}</p>
              <img src={reactLogo} alt="react logo" />
              <ExpandMoreIcon style={{ cursor: 'pointer' }} />
            </Box>
            <Slider
              style={{ width: "50vw" }}
              aria-label="Temperature"
              defaultValue={0}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={5}
              onClick={(e) => e.stopPropagation()}
            />
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              {desc}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>

    </>
  )
}

export default SliderContainer
