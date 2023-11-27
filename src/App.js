import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<HomePage />}/>
        <Route  path='/pricing' exact  element={<PricingPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
