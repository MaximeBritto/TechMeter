import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import SliderContext from './composant/SliderContext';
import TechSummary from './composant/TechSummary';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import "./index.css";
import DetailsPage from "./pages/DetailsPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import AuthSecure from "./composant/server/authSecure.jsx";

function Main() {
  const [sliderValues, setSliderValues] = useState();
  //const accesToken = JSON.parse(localStorage.getItem('sb-lkhayewnehhxhqkckehs-auth-token'));

  return (
    <SliderContext.Provider value={{ values: sliderValues, setValues: setSliderValues }}>
      <BrowserRouter>

        <Routes>
           
        <Route path="/" element={<AuthSecure  ><HomePage/> </AuthSecure>} />
        
          <Route path="/details/:name" element={
          <AuthSecure  path="/details/:name" element={<DetailsPage />} />
          } />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </SliderContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
