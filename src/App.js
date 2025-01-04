
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
  margin: 0;
  padding: 0;
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

