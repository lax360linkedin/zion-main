import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Neet from "./pages/Neet";
import Builders from "./pages/Builders";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import FloatingSocial from "./components/ui/FloatingSocial";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/NEET" element={<Neet />} />
          <Route path="/builders" element={<Builders />} />
        </Routes>
        <FloatingSocial />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
<h1>Zion </h1>;
