import React, { useState } from 'react';
import { History as HistoryIcon, ArrowUpRight, ArrowDownRight, CheckCircle2, Clock, XCircle } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'bid' | 'win' | 'claim';
  invoiceId: string;
  amount: number;
  timestamp: string;
  status: 'success' | 'pending' | 'failed';
}

const History: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bids' | 'wins' | 'claims'>('all');

  const transactions: Transaction[] = [
    {
      id: 'TXN001',
      type: 'bid',
      invoiceId: 'INV1283',
      amount: 65250,
      timestamp: '2024-03-15 14:30',
      status: 'success'
    },
    {
      id: 'TXN002',
      type: 'win',
      invoiceId: 'INV1280',
      amount: 44875,
      timestamp: '2024-03-14 09:15',
      status: 'success'
    },
    {
      id: 'TXN003',
      type: 'claim',
      invoiceId: 'INV1275',
      amount: 75000,
      timestamp: '2024-03-13 16:45',
      status: 'success'
    },
    {
      id: 'TXN004',
      type: 'bid',
      invoiceId: 'INV1282',
      amount: 89500,
      timestamp: '2024-03-12 11:20',
      status: 'pending'
    },
    {
      id: 'TXN005',
      type: 'claim',
      invoiceId: 'INV1270',
      amount: 25000,
      timestamp: '2024-03-11 13:10',
      status: 'failed'
    }
  ];

  const filteredTransactions = activeFilter === 'all' 
    ? transactions 
    : transactions.filter(tx => tx.type === activeFilter.slice(0, -1));

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'bid':
        return <ArrowUpRight className="w-5 h-5 text-cyan-400" />;
      case 'win':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'claim':
        return <ArrowDownRight className="w-5 h-5 text-purple-400" />;
      default:
        return null;
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'bid':
        return 'Placed Bid';
      case 'win':
        return 'Won Auction';
      case 'claim':
        return 'Claimed Repayment';
      default:
        return type;
    }
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mr-4">
              <HistoryIcon className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Transaction History</h1>
              <p className="text-gray-400">Track your bids, wins, and claims</p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 mt-4 md:mt-0 bg-gray-800/50 p-1 rounded-lg">
            {['all', 'bids', 'wins', 'claims'].map((filter) => (
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

        {/* Transactions Table */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Type</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Invoice ID</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Amount</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Date</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr 
                    key={tx.id}
                    className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {getTypeIcon(tx.type)}
                        <span className="ml-2">{getTypeText(tx.type)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium">{tx.invoiceId}</td>
                    <td className="py-4 px-6">${tx.amount.toLocaleString()} USDC</td>
                    <td className="py-4 px-6 text-gray-400">{tx.timestamp}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {getStatusIcon(tx.status)}
                        <span className={`ml-2 capitalize ${
                          tx.status === 'success' ? 'text-green-400' :
                          tx.status === 'pending' ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {tx.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -z-10 top-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </main>
  );
};

export default History;