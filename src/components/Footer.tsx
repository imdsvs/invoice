import React from 'react';
import { BarChart, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Logo & Description */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center mb-6">
              <BarChart className="h-7 w-7 text-cyan-400 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Flow.money
              </span>
            </a>
            
            <p className="text-gray-400 mb-6">
              The liquidity layer for businesses.
              <br />
              Real-world working capital meets on-chain yield.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Company */}
          <div>
            <h3 className="text-white font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Product */}
          <div>
            <h3 className="text-white font-medium mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-white font-medium mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Flow.money. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;