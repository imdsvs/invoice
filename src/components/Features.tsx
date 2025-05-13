import React from 'react';
import { FileText, BarChart3, Repeat, RefreshCw } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: "Tokenize Invoices Instantly",
      description: "Create NFT-backed invoices with verified business data."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: "Decentralized Auction Engine",
      description: "Let investors bid using USDC, unlocking fair market-driven capital."
    },
    {
      icon: <Repeat className="w-8 h-8 text-cyan-400" />,
      title: "Transferable Yield Rights",
      description: "NFTs represent claim rights and can be traded on secondary markets."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-cyan-400" />,
      title: "On-Chain Repayment & Payout",
      description: "Borrowers repay, investors claim — fully programmatic and transparent."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful Features{' '}
            <span className="text-gray-400">just for you</span>
          </h2>
          <p className="text-gray-300 text-lg">
            End-to-end on-chain liquidity rails for real-world businesses and capital providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;