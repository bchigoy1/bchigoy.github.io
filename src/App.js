import React from 'react';
import { portfolioData } from './data/portfolio-data';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Research from './components/Research';
import Background from './components/Background';

function App() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="fixed w-64 h-full">
        <Sidebar personal={portfolioData.personal} />
      </div>
      <div className="ml-64 flex-1">
        <Banner />
        <main className="max-w-4xl mx-auto px-8 py-12">
          <Summary />
          <Experience />
          <Research />
          <Background />
        </main>
      </div>
    </div>
  );
}

export default App;
