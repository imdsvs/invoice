import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Building, FileText, TrendingUp, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const AuctionDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bidAmount, setBidAmount] = useState('');

  // Mock data - In a real app, this would come from your API
  const auction = {
    id: id,
    buyerName: 'Acme Corporation',
    faceValue: 75000,
    currentBid: 65250,
    timeRemaining: '23h 45m',
    yield: 9.5,
    bids: 12,
    dueDate: '2024-06-15',
    description: 'Invoice for enterprise software licensing and implementation services.',
    riskScore: 'A+',
    minimumBid: 65500,
  };

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the bid submission
    console.log('Submitting bid:', bidAmount);
  };

  const isValidBid = Number(bidAmount) > auction.currentBid;

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center text-gray-400 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Marketplace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Invoice NFT {auction.id}</h1>
                  <div className="flex items-center text-gray-400">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{auction.buyerName}</span>
                  </div>
                </div>
                <span className="px-4 py-1 bg-green-900/30 text-green-400 text-sm rounded-full">
                  Live Auction
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Face Value</p>
                  <p className="text-lg font-medium">${auction.faceValue.toLocaleString()} USDC</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Current Bid</p>
                  <p className="text-lg font-medium">${auction.currentBid.toLocaleString()} USDC</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Time Remaining</p>
                  <div className="flex items-center text-lg font-medium">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    {auction.timeRemaining}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Yield</p>
                  <p className="text-lg font-medium text-cyan-400">{auction.yield}% APY</p>
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-6">Invoice Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400">Due Date</span>
                  <span>{auction.dueDate}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400">Description</span>
                  <span className="text-right">{auction.description}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400">Risk Score</span>
                  <span className="text-green-400">{auction.riskScore}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-400">Active Bids</span>
                  <span>{auction.bids}</span>
                </div>
              </div>
            </div>

            {/* Bid History */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-6">Bid History</h2>
              <div className="space-y-3">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <span className="text-gray-400">0x7a32...b19d</span>
                      <span className="mx-2 text-gray-600">•</span>
                      <span className="text-gray-400 text-sm">2 hours ago</span>
                    </div>
                    <span className="font-medium">${(65250 - index * 250).toLocaleString()} USDC</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Place Bid Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Place a Bid</h2>
              
              <form onSubmit={handleBidSubmit}>
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">
                    Bid Amount (USDC)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Enter bid amount"
                      min={auction.minimumBid}
                      step="0.01"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Minimum bid: ${auction.minimumBid.toLocaleString()} USDC
                  </p>
                </div>

                {!isValidBid && bidAmount && (
                  <div className="flex items-start space-x-2 text-red-400 mb-4">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Bid must be higher than the current highest bid</p>
                  </div>
                )}

                <Button
                  variant="primary"
                  fullWidth
                  type="submit"
                  disabled={!isValidBid}
                >
                  Confirm Bid
                </Button>
              </form>

              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <FileText className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-400">Important Information</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Bids are binding and cannot be withdrawn</li>
                  <li>• Winning bid requires sufficient USDC balance</li>
                  <li>• NFT is transferred immediately upon auction end</li>
                </ul>
              </div>
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

export default AuctionDetail;