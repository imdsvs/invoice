import React from 'react';
import { BarChart3, Wallet, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../hooks/useWallet';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { connected } = useWallet();

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Summary Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center mr-3">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium">Auctions Live Now</h3>
            </div>
            <p className="text-3xl font-bold text-cyan-400">12</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center mr-3">
                <Wallet className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium">NFTs Held</h3>
            </div>
            <p className="text-3xl font-bold text-cyan-400">5</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium">Pending Repayments</h3>
            </div>
            <p className="text-3xl font-bold text-cyan-400">$125,000</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Auctions */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Active Auctions</h2>
              <button 
                onClick={() => navigate('/marketplace')}
                className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm"
              >
                Browse All
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate(`/auction/INV${1284 + index}`)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Invoice NFT #{1284 + index}</span>
                    <span className="text-sm font-medium text-green-400">Live</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">$50,000 USDC</span>
                    <span className="text-cyan-400">9.5% APY</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all group-hover:shadow-glow" style={{ width: '35%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">My NFTs</h2>
              <button 
                onClick={() => navigate('/portfolio')}
                className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate('/portfolio')}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Invoice NFT #{1280 + index}</span>
                    <span className="text-sm font-medium text-yellow-400">Pending</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">$25,000 USDC</span>
                    <span className="text-sm text-gray-400">Due in 45 days</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -z-10 top-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </main>
  );
};

export default Dashboard;