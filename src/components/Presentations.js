import React from 'react';

const Presentations = ({ presentations }) => {
  return (
    <section id="presentations" className="mb-24">
      <h2 className="text-3xl font-bold mb-12">Presentations</h2>
      <div className="space-y-6">
        {presentations.map((presentation, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl text-gray-900">{presentation.title}</h3>
              <span className="text-gray-500">{presentation.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Presentations;
