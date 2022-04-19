import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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
