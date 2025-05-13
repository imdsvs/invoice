import React, { useState } from 'react';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';
import Button from './ui/Button';

interface NFT {
  id: string;
  faceValue: number;
  yourBid: number;
  status: 'claimable' | 'pending' | 'defaulted';
  dueDate: string;
  yield: number;
}

interface ClaimModalProps {
  nft: NFT;
  isOpen: boolean;
  onClose: () => void;
}

const ClaimModal: React.FC<ClaimModalProps> = ({ nft, isOpen, onClose }) => {
  const [claiming, setClaiming] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleClaim = async () => {
    try {
      setClaiming(true);
      setError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      setError('Failed to claim repayment. Please try again.');
    } finally {
      setClaiming(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-6 w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Repayment Claimed!</h3>
            <p className="text-gray-400">
              ${nft.faceValue.toLocaleString()} USDC has been transferred to your wallet
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-6">Claim Repayment</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Invoice NFT</span>
                <span>{nft.id}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Face Value</span>
                <span>${nft.faceValue.toLocaleString()} USDC</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Your Bid</span>
                <span>${nft.yourBid.toLocaleString()} USDC</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-400">Expected Return</span>
                <span className="text-cyan-400">
                  ${(nft.faceValue - nft.yourBid).toLocaleString()} USDC
                </span>
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-400 mb-4 p-3 bg-red-900/20 rounded-lg">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <Button
              variant="primary"
              fullWidth
              onClick={handleClaim}
              disabled={claiming}
            >
              {claiming ? 'Claiming...' : `Claim ${nft.faceValue.toLocaleString()} USDC`}
            </Button>

            <p className="text-sm text-gray-400 mt-4 text-center">
              By claiming, you'll receive the full face value of the invoice NFT
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ClaimModal;