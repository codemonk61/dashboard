
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Styleguide from "./pages/Styleguide";

const ProtectedRoute = ({ children }) => {
  const session = localStorage.getItem("session");
  return session ? children : <Navigate to="/login" />;
};

const globalStyle = `
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap');
  margin: 0;
  padding: 0;
  font-family: "Montserrat", serif;
  box-sizing: border-box;
`

const App = () => {
  return (
    <>
    <style>
    {
      globalStyle
    }
    </style>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/styleguide" element={<Styleguide/>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
             <Dashboard/>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;

