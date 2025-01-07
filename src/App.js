import React from 'react';
import { portfolioData } from './data/portfolio-data';
import Sidebar from './components/Sidebar';
// import Banner from './components/Banner';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Research from './components/Research';
import Background from './components/Background';
import Products from './components/Products';

import Projects from './components/Projects';
import Learning from './components/Learning';
import Career from './components/Career';
import ResizablePanel from './components/ResizablePanel';

function App() {
  const { sections, personal } = portfolioData;

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <div className="fixed w-64 h-full">
        <Sidebar personal={personal} />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex">
        {/* Main Content Column */}
        <div className="flex-grow max-w-3xl px-8 py-4">
          {/* <Banner /> */}
          <Summary data={sections.about} className="mb-8" />
          <Background data={sections.background} className="mb-8" />
          <Experience 
            teamBuilding={sections.teamBuilding}
            infrastructure={sections.infrastructure}
            improvingLives={sections.improvingLives}
            className="mb-8"
          />
          <Research data={sections.research} className="mb-8" />
          <Products products={sections.products} />
          <Projects projects={sections.projects} />
          <Learning learning={sections.learning} />
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