import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { portfolioData } from './data/portfolio-data';
import ProfileHeader from './components/ProfileHeader';
import Summary from './components/Summary';
import InnovationAndProducts from './components/InnovationAndProducts';
import Projects from './components/Projects';
import Learning from './components/Learning';
import SkillsVenn from './components/SkillsVenn';
import Contact from './components/Contact';
import Career from './components/Career';
import ResizablePanel from './components/ResizablePanel';

function App() {
  const { sections, personal } = portfolioData;
  const [panelWidth, setPanelWidth] = useState(300);

  const handlePanelWidth = useCallback((w) => setPanelWidth(w), []);

  return (
    <div className="relative min-h-screen md:h-screen bg-gray-50 md:overflow-hidden">
      {/* Semi-transparent background image — centered on main content area */}
      <div
        className="fixed top-0 left-0 bottom-0 bg-center bg-no-repeat bg-contain opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/ven.png)`,
          right: panelWidth,
        }}
      />

      <div className="relative z-10 min-h-screen md:h-screen md:overflow-hidden">
        {/* Main Content Column */}
        <div className="md:h-full" style={{ marginRight: panelWidth }}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="md:h-full md:overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} showProfile />
                    <Summary data={sections.about} />
                  </div>
                </div>
              }
            />
            <Route
              path="/innovation"
              element={
                <div className="md:h-full md:overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <InnovationAndProducts aiInnovation={sections.aiInnovation} research={sections.research} ai={sections.ai} products={sections.products} />
                  </div>
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div className="md:h-full md:overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <Projects projects={sections.projects} expanded />
                  </div>
                </div>
              }
            />
            <Route
              path="/presentations"
              element={
                <div className="md:h-full md:overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <Learning learning={sections.learning} expanded />
                  </div>
                </div>
              }
            />
            <Route
              path="/skills"
              element={
                <div className="md:h-full md:overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <SkillsVenn />
                  </div>
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="md:h-full md:overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <Contact data={sections.contact} />
                  </div>
                </div>
              }
            />
          </Routes>
        </div>

        {/* Resizable Right Panel */}
        <ResizablePanel onWidthChange={handlePanelWidth}>
          <Career data={portfolioData.careers} />
        </ResizablePanel>
      </div>
    </div>
  );
}

export default App;
