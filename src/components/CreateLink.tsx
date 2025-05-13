import React from 'react';
import { FileText, Clock, BarChart, ChevronRight } from 'lucide-react';

const CreateLink: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Create an invoice.{' '}
              <span className="text-gray-400">Get funded.</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Upload your invoice, let investors compete to fund you.
            </p>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm text-gray-400 mb-2">Upload Invoice</label>
                  <div className="bg-gray-900 rounded-lg border border-gray-700 p-4 flex items-center cursor-pointer hover:border-cyan-700 transition-colors">
                    <FileText className="text-gray-400 mr-3 w-5 h-5" />
                    <span className="text-gray-300 text-sm">Select PDF file</span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm text-gray-400 mb-2">Due Date</label>
                  <div className="bg-gray-900 rounded-lg border border-gray-700 p-4 flex items-center cursor-pointer hover:border-cyan-700 transition-colors">
                    <Clock className="text-gray-400 mr-3 w-5 h-5" />
                    <span className="text-gray-300 text-sm">Select due date</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  Mint Invoice NFT
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-500">By minting, you agree to Flow.money's <a href="#" className="text-cyan-400 hover:underline">Terms of Service</a></span>
            </div>
          </div>
          
          <div className="relative h-96 md:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-cyan-500/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute w-48 h-48 border border-cyan-500/20 rounded-full animate-pulse-slower"></div>
              
              <div className="absolute">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl shadow-cyan-900/10 max-w-xs">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center mr-3">
                      <FileText className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Invoice NFT #1284</h4>
                      <p className="text-xs text-gray-400">Created just now</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Amount</span>
                      <span className="text-sm font-medium">$50,000 USDC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Due Date</span>
                      <span className="text-sm font-medium">June 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Status</span>
                      <span className="text-sm font-medium text-green-400">Auction Live</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-700 h-1.5 rounded-full mb-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full w-[35%]"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">0 bids</span>
                    <span className="text-gray-400">Target: 10+ bids</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -z-10 top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default CreateLink;