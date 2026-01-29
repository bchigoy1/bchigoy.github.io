import React from 'react';
import { portfolioData } from './data/portfolio-data';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Research from './components/Research';
import Background from './components/Background';
import AI from './components/AI';
import Products from './components/Products';

import Projects from './components/Projects';
import Learning from './components/Learning';
import Career from './components/Career';
import ResizablePanel from './components/ResizablePanel';

function App() {
  const { sections, personal } = portfolioData;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="hidden md:block fixed w-64 h-full z-30">
        <Sidebar personal={personal} />
      </div>
      {/* Mobile-only: Sidebar renders its own hamburger + overlay */}
      <div className="md:hidden">
        <Sidebar personal={personal} />
      </div>

      {/* Main Content */}
      <div className="ml-0 md:ml-64 flex flex-col md:flex-row flex-1">
        {/* Main Content Column */}
        <div className="flex-grow max-w-3xl px-4 md:px-8 py-4 pt-14 md:pt-4">
          <Banner />
          <div className="space-y-10 md:space-y-16">
            <Summary data={sections.about} />
            <Background data={sections.background} />
            <Experience
              teamBuilding={sections.teamBuilding}
              infrastructure={sections.infrastructure}
              improvingLives={sections.improvingLives}
            />
            <Research data={sections.research} />
            <AI ai={sections.ai} />
            <Products products={sections.products} />
            <Projects projects={sections.projects} />
            <Learning learning={sections.learning} />
          </div>
        </div>

        {/* Resizable Right Panel */}
        <ResizablePanel>
          <Career data={portfolioData.careers} />
        </ResizablePanel>
      </div>
    </div>
  );
}

export default App;
