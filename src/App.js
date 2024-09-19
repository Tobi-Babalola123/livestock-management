// App.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import AnimalManagement from "./components/AnimalManagement";
import HealthManagement from "./components/HealthManagement";
import BreedingManagement from "./components/BreedingManagement";
import ProductivityTracking from "./components/ProductivityTracking";
import FeedManagement from "./components/FeedManagement";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Header />
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/animals" element={<AnimalManagement />} />
          <Route path="/health" element={<HealthManagement />} />
          <Route path="/breeding" element={<BreedingManagement />} />
          <Route path="/productivity" element={<ProductivityTracking />} />
          <Route path="/feed" element={<FeedManagement />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
