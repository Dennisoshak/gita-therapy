import React, { useMemo } from "react";
import { Routes, Route, Navigate,useNavigate } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./hooks/usAuth"
import Videos from "./pages/Videos";


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
            element={ <Home /> }
          />
          <Route path="/events" element={user && <Events />} />
          <Route path="/videos" element={user && <Videos />} />
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
