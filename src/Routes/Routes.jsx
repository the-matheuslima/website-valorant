import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home/Home";
import Catalogo from "../pages/Catalogo"
function ARoutes() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo/:category" element={<Catalogo />} />
            {/* <Route path="/weapons" element={<Weapons />} /> */}
         </Routes>
         <Footer />
      </Router>
   );
}

export default ARoutes;
