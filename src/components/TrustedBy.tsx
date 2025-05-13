import React from 'react';
import { CircleDollarSign, Shield, Compass, Star } from 'lucide-react';

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold mb-2 uppercase tracking-wide text-sm">
            TRUSTED BY BELOVED PARTNERS AND COMPANIES
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-70">
          {/* First Row */}
          <div className="flex items-center justify-center group">
            <CircleDollarSign className="w-6 h-6 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">USDC</span>
          </div>
          
          <div className="flex items-center justify-center group">
            <Star className="w-6 h-6 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">Circle</span>
          </div>
          
          <div className="flex items-center justify-center group">
            <Shield className="w-6 h-6 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">Helius</span>
          </div>
          
          <div className="flex items-center justify-center group">
            <Compass className="w-6 h-6 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">Phantom</span>
          </div>
          
          {/* Second Row */}
          <div className="flex items-center justify-center group">
            <CircleDollarSign className="w-6 h-6 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">Sumsub</span>
          </div>
          
          <div className="flex items-center justify-center group">
            <Star className="w-6 h-6 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">Jupiter</span>
          </div>
          
          <div className="flex items-center justify-center group">
            <Shield className="w-6 h-6 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">MetaMask</span>
          </div>
          
          <div className="flex items-center justify-center group">
            <Compass className="w-6 h-6 mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">0x Protocol</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;