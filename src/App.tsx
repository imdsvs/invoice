import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import AuctionDetail from './pages/AuctionDetail';
import Portfolio from './pages/Portfolio';
import History from './pages/History';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/auction/:id" element={<AuctionDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;