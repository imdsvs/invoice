import React from 'react';
import Button from './ui/Button';
import { FileText, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The liquidity layer for{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                businesses
              </span>{' '}
              seeking{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                working capital
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Tokenize unpaid invoices, raise capital through on-chain auctions, 
              and let investors earn fixed yield.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg">Start Raising Capital</Button>
              <Button variant="outline" size="lg">Contact Sales</Button>
            </div>
          </div>
          
          <div className="relative h-72 md:h-96 lg:h-[500px] flex items-center justify-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl shadow-cyan-900/10 w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30 hover:scale-[1.02] hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center mr-3 transition-colors group-hover:bg-cyan-800/50">
                  <FileText className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-medium">Invoice NFT #1284</h4>
                  <p className="text-xs text-gray-400">Created just now</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between transition-colors hover:text-cyan-400">
                  <span className="text-sm text-gray-400">Amount</span>
                  <span className="text-sm font-medium">$50,000 USDC</span>
                </div>
                <div className="flex justify-between transition-colors hover:text-cyan-400">
                  <span className="text-sm text-gray-400">Due Date</span>
                  <span className="text-sm font-medium">June 15, 2025</span>
                </div>
                <div className="flex justify-between transition-colors hover:text-cyan-400">
                  <span className="text-sm text-gray-400">Status</span>
                  <span className="text-sm font-medium text-green-400">Auction Live</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 px-3 bg-gray-800 rounded-md transition-all hover:bg-gray-700 hover:shadow-lg hover:scale-[1.02]">
                  <span className="text-sm text-gray-300">0x7a32...b19d</span>
                  <span className="text-sm text-white font-medium">$45,250 USDC</span>
                </div>
                <div className="flex justify-between py-2 px-3 bg-gray-800 rounded-md transition-all hover:bg-gray-700 hover:shadow-lg hover:scale-[1.02]">
                  <span className="text-sm text-gray-300">0xf19b...3ea2</span>
                  <span className="text-sm text-white font-medium">$45,100 USDC</span>
                </div>
                <div className="flex justify-between py-2 px-3 bg-gray-800 rounded-md transition-all hover:bg-gray-700 hover:shadow-lg hover:scale-[1.02]">
                  <span className="text-sm text-gray-300">0x3d71...c45a</span>
                  <span className="text-sm text-white font-medium">$44,875 USDC</span>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="w-full bg-gray-700 h-1.5 rounded-full mb-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full w-[35%] transition-all hover:shadow-lg hover:shadow-cyan-500/50"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">3 bids</span>
                  <span className="text-gray-400">Target: 10+ bids</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-4 gap-2">
                <div className="bg-gray-800 rounded-md p-2 text-center transition-all hover:bg-gray-700 hover:shadow-lg hover:scale-[1.05]">
                  <span className="block text-lg font-medium text-white">23</span>
                  <span className="text-xs text-gray-400">Hours</span>
                </div>
                <div className="bg-gray-800 rounded-md p-2 text-center transition-all hover:bg-gray-700 hover:shadow-lg hover:scale-[1.05]">
                  <span className="block text-lg font-medium text-white">45</span>
                  <span className="text-xs text-gray-400">Minutes</span>
                </div>
                <div className="bg-gray-800 rounded-md p-2 text-center transition-all hover:bg-gray-700 hover:shadow-lg hover:scale-[1.05]">
                  <span className="block text-lg font-medium text-white">12</span>
                  <span className="text-xs text-gray-400">Seconds</span>
                </div>
                <div className="bg-cyan-900/30 rounded-md p-2 text-center transition-all hover:bg-cyan-800/40 hover:shadow-lg hover:scale-[1.05]">
                  <span className="block text-xs text-cyan-400">Auction</span>
                  <span className="block text-sm font-medium text-white">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent"></div>
      <div className="absolute -z-10 top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;