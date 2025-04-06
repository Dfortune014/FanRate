
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlayerGrid from '@/components/PlayerGrid';
import TrendingPlayers from '@/components/TrendingPlayers';
import TopRatedSection from '@/components/TopRatedSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-sport-red text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Rate. Review. Represent.
            </h1>
            <p className="mt-2 text-lg md:text-xl max-w-2xl">
              The ultimate fan-driven rating platform where your opinion on athletes actually matters.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PlayerGrid />
            </div>
            
            <div className="space-y-8">
              <TrendingPlayers />
              <TopRatedSection />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
