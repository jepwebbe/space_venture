import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss";
import Hjem from "./pages/Hjem";
import Galleri from "./pages/Galleri";
import Kontakt from "./pages/Kontakt";
import Rumfargen from "./pages/Rumfargen";
import Sikkerhed from "./pages/Sikkerhed";
import Ture from "./pages/Ture";

import Footer from "./components/Footer"
import NavBar from "./components/NavBar";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

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

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;