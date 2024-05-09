import React from "react";
import "./Today.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import How from "../../components/How/How";
import Footer from "../../components/Footer/Footer";

export default function Today() {
  return (
    <div className="hero">
      <Header />
      <Hero />
      <How />
      <Footer />
    </div>
  );
}
