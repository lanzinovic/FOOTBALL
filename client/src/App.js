import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Today from "./pages/Today/Today";
import Accumulator from "./pages/Accumulator/Accumulator";
import Vip from "./pages/Vip/Vip";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Refund from "./pages/Refund/Refund";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/Accumulator" element={<Accumulator />} />
        <Route path="/Vip" element={<Vip />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Refund" element={<Refund />} />
      </Routes>
    </>
  );
}
