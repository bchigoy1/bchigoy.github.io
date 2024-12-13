import React from 'react';
import { portfolioData } from './data/portfolio-data';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header personal={portfolioData.personal} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Summary />
        <Experience experience={portfolioData.experience} />
        <Projects />
        <Skills skills={portfolioData.skills} />
        <Contact personal={portfolioData.personal} />
      </main>
    </div>
  );
}

export default App;
