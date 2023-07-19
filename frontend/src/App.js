import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./hooks/usAuth";
import Footer from "./components/Footer";

function App() {
 const user = useAuth();
 console.log(user)
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
