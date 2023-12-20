import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import SliderContext from './composant/SliderContext';
import TechSummary from './composant/TechSummary';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import "./index.css";
import DetailsPage from "./pages/DetailsPage.jsx";

function Main() {
  const [sliderValues, setSliderValues] = useState();

  return (
    <SliderContext.Provider value={{ values: sliderValues, setValues: setSliderValues }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:name" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </SliderContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
