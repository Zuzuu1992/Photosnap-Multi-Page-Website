import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Features, Home, Pricing, Stories } from "./pages";

function App() {
  const [active, setActive] = useState<boolean>(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home active={active} handleActive={handleActive} />}
        />

        <Route
          path="/stories"
          element={<Stories active={active} handleActive={handleActive} />}
        />
        <Route
          path="/features"
          element={<Features active={active} handleActive={handleActive} />}
        />
        <Route
          path="/pricing"
          element={<Pricing active={active} handleActive={handleActive} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
