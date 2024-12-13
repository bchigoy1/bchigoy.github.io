import React from 'react';
import { portfolioData } from '../data/portfolio-data';

const Summary = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
      <ul className="list-disc pl-5 space-y-2">
        {portfolioData.summary.points.map((point, index) => (
          <li key={index} className="text-gray-700">{point}</li>
        ))}
      </ul>
    </section>
  );
};

export default Summary;
