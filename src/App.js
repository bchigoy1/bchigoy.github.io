import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { portfolioData } from './data/portfolio-data';
import ProfileHeader from './components/ProfileHeader';
import Summary from './components/Summary';
import Research from './components/Research';
import AI from './components/AI';
import Products from './components/Products';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Career from './components/Career';
import ResizablePanel from './components/ResizablePanel';

function App() {
  const { sections, personal } = portfolioData;
  const [panelWidth, setPanelWidth] = useState(300);

  const handlePanelWidth = useCallback((w) => setPanelWidth(w), []);

  return (
    <div className="relative h-screen bg-gray-50 overflow-hidden">
      {/* Semi-transparent background image — centered on main content area */}
      <div
        className="fixed top-0 left-0 bottom-0 bg-center bg-no-repeat bg-contain opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/ven.png)`,
          right: panelWidth,
        }}
      />

      <div className="relative z-10 h-screen overflow-hidden">
        {/* Main Content Column */}
        <div className="h-full" style={{ marginRight: panelWidth }}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="h-full overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <Summary data={sections.about} />
                  </div>
                </div>
              }
            />
            <Route
              path="/research"
              element={
                <div className="h-full overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <Research data={sections.research} />
                  </div>
                </div>
              }
            />
            <Route
              path="/ai"
              element={
                <div className="h-full overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <AI ai={sections.ai} expanded />
                  </div>
                </div>
              }
            />
            <Route
              path="/products"
              element={
                <div className="h-full overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <Products products={sections.products} expanded />
                  </div>
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div className="h-full overflow-y-auto">
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
                <div className="h-full overflow-y-auto">
                  <div className="px-6 md:px-12 py-8">
                    <ProfileHeader personal={personal} />
                    <Learning learning={sections.learning} expanded />
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
