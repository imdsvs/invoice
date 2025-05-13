import React from 'react';
import { ArrowRight } from 'lucide-react';

const AcceptCrypto: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Raise funds in crypto{' '}
              <span className="text-gray-400">without writing a single line of code.</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Flow.money allows businesses to plug in and raise capital in USDC against real 
              invoices — no dev team, no friction. Just verified documents and yield-seeking capital.
            </p>
            
            <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group">
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-2xl shadow-cyan-900/10">
              <div className="p-5 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <p className="ml-4 text-sm text-gray-400">Invoice NFT #1283</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">NFT Status</span>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Invoice Amount</span>
                    <span className="text-white font-medium">$75,000 USDC</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Maturity Date</span>
                    <span className="text-white font-medium">May 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Yield</span>
                    <span className="text-cyan-400 font-medium">9.5% APY</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 font-medium">Auction Bids</span>
                    <span className="text-sm text-gray-400">12 active bids</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 px-3 bg-gray-800 rounded-md">
                      <span className="text-sm text-gray-300">0x7a32...b19d</span>
                      <span className="text-sm text-white font-medium">$65,250 USDC</span>
                    </div>
                    <div className="flex justify-between py-2 px-3 bg-gray-800 rounded-md">
                      <span className="text-sm text-gray-300">0xf19b...3ea2</span>
                      <span className="text-sm text-white font-medium">$65,100 USDC</span>
                    </div>
                    <div className="flex justify-between py-2 px-3 bg-gray-800 rounded-md">
                      <span className="text-sm text-gray-300">0x3d71...c45a</span>
                      <span className="text-sm text-white font-medium">$64,875 USDC</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300 font-medium">Time Remaining</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-gray-800 rounded-md p-3 text-center">
                      <span className="block text-xl font-medium text-white">23</span>
                      <span className="text-xs text-gray-400">Hours</span>
                    </div>
                    <div className="bg-gray-800 rounded-md p-3 text-center">
                      <span className="block text-xl font-medium text-white">45</span>
                      <span className="text-xs text-gray-400">Minutes</span>
                    </div>
                    <div className="bg-gray-800 rounded-md p-3 text-center">
                      <span className="block text-xl font-medium text-white">12</span>
                      <span className="text-xs text-gray-400">Seconds</span>
                    </div>
                    <div className="bg-cyan-900/30 rounded-md p-3 text-center">
                      <span className="block text-xs text-cyan-400">Auction</span>
                      <span className="block text-sm font-medium text-white">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default AcceptCrypto;