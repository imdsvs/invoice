import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AcceptCrypto from '../components/AcceptCrypto';
import CreateLink from '../components/CreateLink';
import FAQ from '../components/FAQ';
import GlobalPayoutCTA from '../components/GlobalPayoutCTA';

const LandingPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <AcceptCrypto />
      <CreateLink />
      <FAQ />
      <GlobalPayoutCTA />
    </main>
  );
};

export default LandingPage;