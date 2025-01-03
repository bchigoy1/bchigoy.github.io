import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import ContentRenderer from './ContentRenderer';

const Summary = () => {
  const { about } = portfolioData.sections;
  return (
    <section id="about" className="mb-24">
      <h2 className="text-3xl font-bold mb-6">{about.title}</h2>
      <ContentRenderer content={about.content} />
    </section>
  );
};

export default Summary;
