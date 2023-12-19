import { Box, Slider, Stack } from '@mui/material';

function SliderContainer({name}) {
  
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
<Stack style={{ border: '1px solid #ccc', width: '100%' }}>
  <Box style={{ display: 'flex', padding: '2rem 3rem', gap: '2rem', alignItems: 'center' }}>
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{width: "15rem",  fontSize: "1.2rem"}}>{name}</p>
      <p style={{fontSize: "3rem", fontWeight: "medium"}}>+</p>
    </Box>
    <Slider
      aria-label="Temperature"
      defaultValue={0}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      step={1}
      marks
      min={0}
      max={6}
    />
  </Box>
  
</Stack>
       
    </>
  )
}

export default SliderContainer
