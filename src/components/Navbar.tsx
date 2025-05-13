import React, { useState, useEffect } from 'react';
import { BarChart, Wallet, Menu, X, History } from 'lucide-react';
import Button from './ui/Button';
import { useWallet } from '../hooks/useWallet';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { connected, publicKey, connect, disconnect } = useWallet();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleWalletClick = async () => {
    if (connected) {
      await disconnect();
    } else {
      await connect();
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BarChart className="h-7 w-7 text-cyan-400 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Flow.money
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`transition-colors ${isActive('/dashboard') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/marketplace" 
              className={`transition-colors ${isActive('/marketplace') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Marketplace
            </Link>
            <Link 
              to="/portfolio" 
              className={`transition-colors ${isActive('/portfolio') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/history" 
              className={`transition-colors ${isActive('/history') ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              History
            </Link>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant={connected ? "outline" : "primary"}
              onClick={handleWalletClick}
              className="flex items-center"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {connected ? formatAddress(publicKey) : "Connect Wallet"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors py-2">Home</Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors py-2">Dashboard</Link>
              <Link to="/marketplace" className="text-gray-300 hover:text-white transition-colors py-2">Marketplace</Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors py-2">Portfolio</Link>
              <Link to="/history" className="text-gray-300 hover:text-white transition-colors py-2">History</Link>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Docs</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button 
                  variant={connected ? "outline" : "primary"}
                  onClick={handleWalletClick}
                  fullWidth
                  className="flex items-center justify-center"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  {connected ? formatAddress(publicKey) : "Connect Wallet"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;