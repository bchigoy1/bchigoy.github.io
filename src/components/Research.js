import React from 'react';
import { portfolioData } from '../data/portfolio-data';

const Research = () => {
  const { research, teaching } = portfolioData.sections;
  
  return (
    <>
      <section id="research" className="mb-24">
        <h2 className="text-3xl font-bold mb-6">{research.title}</h2>
        <div className="prose lg:prose-lg">
          <p>{research.content}</p>
        </div>
      </section>

      <section id="teaching" className="mb-24">
        <h2 className="text-3xl font-bold mb-6">{teaching.title}</h2>
        <div className="space-y-4">
          {teaching.items.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <span className="text-gray-500">{item.year}</span>
              <h3 className="font-medium">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Research;
