import React, { useMemo } from "react";
import { Routes, Route, Navigate,useNavigate } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./hooks/usAuth"


function App() {
//  const user = useAuth();
const user = useAuth()
 const navigate = useNavigate()
 

  return (
    <div className="App">
      <div className="pages">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/events" element={user && <Events />} />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
