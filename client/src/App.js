import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss";
// Fonts
import "./assets/fonts/MaterialIcons-Regular.woff"
import "./assets/fonts/MaterialIcons-Regular.ttf"
import "./assets/fonts/material-design.ttf"
// Pages
import Hjem from "./pages/Hjem";
import Galleri from "./pages/Galleri";
import Kontakt from "./pages/Kontakt";
import Rumfargen from "./pages/Rumfargen";
import Sikkerhed from "./pages/Sikkerhed";
import Ture from "./pages/Ture";
import Moon from "./pages/Moon";
import Mars from "./pages/Mars";
// Components
import Footer from "./components/Footer"
import NavBar from "./components/NavBar";

function App() {


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path ="/" element={<Hjem />} />
        <Route path="/galleri" element={<Galleri />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/Rumfargen" element={<Rumfargen />} />
        <Route path="/Sikkerhed" element={<Sikkerhed />} />
        <Route path="/Ture" element={<Ture />} />
        <Route path="/Moon" element={<Moon />} />
        <Route path="/Mars" element={<Mars />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;