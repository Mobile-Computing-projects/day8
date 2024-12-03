import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/contactus";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
