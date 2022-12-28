import React from "react";
import logo_d_happiness from "./images/logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components
import HappinessLogo from "./Logo";
import Home from "./Home";
import InformationOverview from "./InformationOverview";
import FoodInformationOverview from "./FoodInformationOverview";
import WeddingPage from "./WeddingPage";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <Router>
          <Routes>
            <Route path="/information" element={<InformationOverview />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/information/food"
              element={<FoodInformationOverview />}
            />
            <Route path="/wedding-information" element={<WeddingPage />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
