import React from "react";
import ReactDOM from "react-dom/client";
import SliderContainer from "./composant/SliderContainer.jsx";
import Bareme from "./composant/Bareme.jsx";
import "./index.css";
import techmeterLogo from "./assets/techmeter-logo.svg"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <div style={{ border: "1px solid #ccc", margin: "0 auto", maxWidth: "100rem", padding: "2rem 5%"}}>
    <img src={techmeterLogo} alt="Techmeter logo" style={{width: "15rem", marginBottom: "2rem"}}/>
    <React.StrictMode>
      <Bareme/>
      <SliderContainer name="Composant"/>
      <SliderContainer name="JSX" />
      <SliderContainer name="Props" />
      <SliderContainer name="Cycle de vie" />
      <SliderContainer name="Hooks" />
      <SliderContainer name="Evènement" />
      <SliderContainer name="Listes et clés" />
    </React.StrictMode>
    ,
  </div>
);
