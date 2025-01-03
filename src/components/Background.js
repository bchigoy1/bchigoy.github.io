import React from 'react';
import { portfolioData } from '../data/portfolio-data';

const Background = () => {
  const { background } = portfolioData.sections;
  
  return (
    <section id="background" className="mb-24">
      <h2 className="text-3xl font-bold mb-6">{background.title}</h2>
      <div className="prose lg:prose-lg">
        <p>{background.content}</p>
      </div>
    </section>
  );
};

export default Background;
