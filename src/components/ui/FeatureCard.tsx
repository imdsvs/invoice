import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-cyan-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10 group">
      <div className="flex flex-col h-full">
        <div className="mb-6 rounded-full bg-gray-800/50 w-16 h-16 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;