import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800 py-6">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className={`text-xl font-medium ${isOpen ? 'text-cyan-400' : 'text-white'}`}>
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-4 text-gray-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "What is invoice financing?",
      answer: (
        <p>
          Invoice financing is a way for businesses to borrow money against unpaid invoices. 
          Instead of waiting 30, 60, or 90+ days for customers to pay, Flow.money allows 
          businesses to tokenize these invoices as NFTs and auction them to investors. This
          provides immediate capital while investors earn yield when the invoice is paid.
        </p>
      )
    },
    {
      question: "How does Flow.money verify borrowers?",
      answer: (
        <p>
          Flow.money uses a combination of traditional KYC/KYB verification and on-chain 
          identity solutions. Businesses must provide documentation proving their legal 
          status, financial health, and the authenticity of invoices. We also use trusted 
          third-party services to verify business legitimacy before allowing participation.
        </p>
      )
    },
    {
      question: "Can I sell my invoice NFT before maturity?",
      answer: (
        <p>
          Yes. One of the key advantages of Flow.money is that invoice NFTs are fully transferable.
          Investors who purchase invoice NFTs in auctions can sell them on supported secondary 
          marketplaces at any time before maturity. This provides liquidity to investors who
          may need to exit positions early.
        </p>
      )
    },
    {
      question: "What happens if a borrower doesn't repay?",
      answer: (
        <p>
          Flow.money includes multiple safeguards against default. First, businesses must provide
          collateral for certain types of invoices. Second, we maintain a default protection pool
          funded by protocol fees. In the event of non-payment, NFT holders can make claims against
          this pool. Finally, legal recourse is available through our partner network of collection
          agencies with traditional invoice factoring experience.
        </p>
      )
    },
    {
      question: "How does repayment get distributed?",
      answer: (
        <p>
          When an invoice is paid, the funds are automatically distributed according to the terms
          encoded in the NFT smart contract. The NFT holder receives the principal plus yield, while
          Flow.money takes a small protocol fee. All transactions happen on-chain with complete
          transparency, and funds are distributed programmatically without manual intervention.
        </p>
      )
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Exploring some{' '}
            <span className="text-gray-400">common questions</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -z-10 top-1/3 right-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default FAQ;