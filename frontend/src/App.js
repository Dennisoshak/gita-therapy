import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Navbar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./hooks/usAuth";
import { useAppSelector } from "./hooks/redux-hooks";

function App() {
  useAuth();
  const user = useAppSelector((state) => state.user);
  return (
    <div className="App">
      <div className="pages">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/workouts" element={user && <Workouts />} />
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
