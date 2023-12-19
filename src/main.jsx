import React from "react";
import ReactDOM from "react-dom/client";
import SliderContainer from "./composant/SliderContainer.jsx";
import "./index.css";
import { Box } from "@mui/system";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Box style={{ border: "1px solid #ccc", maxWidth: "90rem", padding: "5%"}}>
    <React.StrictMode>
      <SliderContainer name="Composant" desc="Les composants sont les blocs de construction de l'interface utilisateur dans React.
Ils peuvent être de deux types : fonctionnels (stateless) ou de classe (stateful)." />
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
