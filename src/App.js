import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Download from "./components/Download";
import DisplayData from "./components/DisplayData";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
