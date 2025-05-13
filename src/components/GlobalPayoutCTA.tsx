import React from 'react';
import Button from './ui/Button';
import { Globe } from 'lucide-react';

const GlobalPayoutCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-cyan-400 opacity-80" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Liquidity across borders,{' '}
            <span className="text-gray-400">blockchains, and books.</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Access capital from anywhere. Payout to anyone. Powered by stablecoins and verifiable real-world assets.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Join Investor Pool</Button>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute w-full h-full rounded-full border border-cyan-900/20 animate-pulse-slow"></div>
          <div className="absolute w-[90%] h-[90%] top-[5%] left-[5%] rounded-full border border-cyan-900/15 animate-pulse-slower"></div>
          <div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] rounded-full border border-cyan-900/10 animate-pulse-slowest"></div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPayoutCTA;