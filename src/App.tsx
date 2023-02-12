import React from "react";
// import logo_d_happiness from "./images/logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
// import HappinessLogo from "./Logo";
import Home from "./Home";
import InformationOverview from "./InformationOverview";
import FoodInformationOverview from "./FoodInformationOverview";
import WeddingPage from "./WeddingPage";
import MoneyExchangeOverview from "./MoneyExchangeOverview";
import AccomodationOverview from "./AccomodationOverview";
import TransportationOverview from "./TransportationOverview";
import ContactOverview from "./ContactOverview";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wedding-information" element={<WeddingPage />} />
            <Route path="/information" element={<InformationOverview />} />
            <Route
              path="/information/food"
              element={<FoodInformationOverview />}
            />
            <Route
              path="/information/moneyexchange"
              element={<MoneyExchangeOverview />}
            />
            <Route
              path="/information/accomodations"
              element={<AccomodationOverview />}
            />
            <Route
              path="/information/transportation"
              element={<TransportationOverview />}
            />
            <Route path="/contact" element={<ContactOverview />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
