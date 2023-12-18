import React from "react";
import ReactDOM from "react-dom/client";
import SliderContainer from "./composant/SliderContainer.jsx";
import "./index.css";
import { Box } from "@mui/system";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Box style={{ border: "1px solid #ccc", maxWidth: "90rem", padding: "5%"}}>
    <React.StrictMode>
      <SliderContainer name="Composant"/>
      <SliderContainer name="JSX" />
      <SliderContainer name="Props" />
      <SliderContainer name="Cycle de vie" />
      <SliderContainer name="Hooks" />
      <SliderContainer name="Evènement" />
      <SliderContainer name="Listes et clés" />
    </React.StrictMode>
    ,
  </Box>
);
