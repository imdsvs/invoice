import React, { useState } from 'react';
import { FileText, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import ClaimModal from '../components/ClaimModal';

interface NFT {
  id: string;
  faceValue: number;
  yourBid: number;
  status: 'claimable' | 'pending' | 'defaulted';
  dueDate: string;
  yield: number;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'claimable' | 'pending' | 'defaulted'>('all');
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  const nfts: NFT[] = [
    {
      id: 'INV1280',
      faceValue: 75000,
      yourBid: 65250,
      status: 'claimable',
      dueDate: '2024-05-15',
      yield: 9.5
    },
    {
      id: 'INV1281',
      faceValue: 50000,
      yourBid: 44875,
      status: 'pending',
      dueDate: '2024-06-30',
      yield: 10.2
    },
    {
      id: 'INV1282',
      faceValue: 100000,
      yourBid: 89500,
      status: 'pending',
      dueDate: '2024-07-15',
      yield: 8.7
    },
    {
      id: 'INV1283',
      faceValue: 25000,
      yourBid: 22125,
      status: 'defaulted',
      dueDate: '2024-04-01',
      yield: 11.5
    }
  ];

  const filteredNFTs = activeFilter === 'all' 
    ? nfts 
    : nfts.filter(nft => nft.status === activeFilter);

  const handleClaimClick = (nft: NFT) => {
    setSelectedNFT(nft);
    setIsClaimModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'claimable':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      case 'defaulted':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'claimable':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'defaulted':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My NFT Portfolio</h1>
            <p className="text-gray-400">Manage your invoice NFTs and claim repayments</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 mt-4 md:mt-0 bg-gray-800/50 p-1 rounded-lg">
            {['all', 'claimable', 'pending', 'defaulted'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-4 py-2 rounded-md capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.map((nft) => (
            <div
              key={nft.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">{nft.id}</h3>
                  <p className="text-sm text-gray-400">Due: {nft.dueDate}</p>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(nft.status)}
                  <span className={`ml-2 capitalize ${getStatusColor(nft.status)}`}>
                    {nft.status}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Face Value</span>
                  <span className="font-medium">${nft.faceValue.toLocaleString()} USDC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Your Bid</span>
                  <span className="font-medium">${nft.yourBid.toLocaleString()} USDC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Yield</span>
                  <span className="text-cyan-400 font-medium">{nft.yield}% APY</span>
                </div>
              </div>

              {nft.status === 'claimable' && (
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => handleClaimClick(nft)}
                >
                  Claim Repayment
                </Button>
              )}

              {nft.status === 'pending' && (
                <div className="flex items-center justify-center p-3 bg-gray-800/50 rounded-lg text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  Awaiting Repayment
                </div>
              )}

              {nft.status === 'defaulted' && (
                <div className="flex items-center justify-center p-3 bg-red-900/20 rounded-lg text-red-400">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Defaulted
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedNFT && (
        <ClaimModal
          nft={selectedNFT}
          isOpen={isClaimModalOpen}
          onClose={() => setIsClaimModalOpen(false)}
        />
      )}

      {/* Background Elements */}
      <div className="absolute -z-10 top-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </main>
  );
};

export default Portfolio;