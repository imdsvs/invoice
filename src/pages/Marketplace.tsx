import React, { useState } from 'react';
import { Clock, TrendingUp, DollarSign, Filter, ArrowUpDown } from 'lucide-react';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

interface SortOption {
  label: string;
  value: string;
}

const sortOptions: SortOption[] = [
  { label: 'Ending Soon', value: 'ending' },
  { label: 'Highest Yield', value: 'yield' },
  { label: 'Amount', value: 'amount' }
];

const Marketplace: React.FC = () => {
  const [sortBy, setSortBy] = useState('ending');
  const navigate = useNavigate();

  const auctions = [
    {
      id: 'INV1283',
      faceValue: 75000,
      currentBid: 65250,
      timeRemaining: '23h 45m',
      yield: 9.5,
      bids: 12
    },
    {
      id: 'INV1284',
      faceValue: 50000,
      currentBid: 44875,
      timeRemaining: '16h 30m',
      yield: 10.2,
      bids: 8
    },
    {
      id: 'INV1285',
      faceValue: 100000,
      currentBid: 89500,
      timeRemaining: '2d 12h',
      yield: 8.7,
      bids: 15
    },
    {
      id: 'INV1286',
      faceValue: 25000,
      currentBid: 22125,
      timeRemaining: '1d 8h',
      yield: 11.5,
      bids: 6
    },
    {
      id: 'INV1287',
      faceValue: 150000,
      currentBid: 135000,
      timeRemaining: '3d',
      yield: 7.8,
      bids: 20
    },
    {
      id: 'INV1288',
      faceValue: 60000,
      currentBid: 53400,
      timeRemaining: '12h',
      yield: 9.8,
      bids: 10
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Invoice Auctions</h1>
            <p className="text-gray-400">Browse and bid on live invoice auctions</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <div
              key={auction.id}
              onClick={() => navigate(`/auction/${auction.id}`)}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium group-hover:text-cyan-400 transition-colors">
                    {auction.id}
                  </h3>
                  <p className="text-sm text-gray-400">{auction.bids} active bids</p>
                </div>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full">
                  Auctioning
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Face Value</span>
                  <span className="font-medium">${auction.faceValue.toLocaleString()} USDC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Bid</span>
                  <span className="font-medium">${auction.currentBid.toLocaleString()} USDC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Yield</span>
                  <span className="text-cyan-400 font-medium">{auction.yield}% APY</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{auction.timeRemaining}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="text-sm">Floor: {(auction.yield - 1).toFixed(1)}%</span>
                </div>
              </div>

              <Button variant="primary" fullWidth>
                Place Bid
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -z-10 top-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </main>
  );
};

export default Marketplace;