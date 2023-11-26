import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/Home";
import SingupPage from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Router>
      <GlobalStyle/>

      <Routes>
        <Route path='/' exact element={<HomePage />}/>
        <Route  path='/singup' exact element={<SingupPage />}/>
        <Route  path='/pricing' exact  element={<PricingPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
