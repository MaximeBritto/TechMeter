import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import "./index.css";
import DetailsPage from "./pages/DetailsPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
