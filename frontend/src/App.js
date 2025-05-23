import React, { useMemo } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./hooks/usAuth";
import Videos from "./pages/Videos";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="pages">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/videos" element={<Videos />} />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
