import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Features, Home, Pricing, Stories } from "./pages";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
