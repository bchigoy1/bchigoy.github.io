import React from 'react';

const Presentations = ({ presentations }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Conference Presentations</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {presentations.map((presentation, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-900">{presentation.title}</h3>
              <span className="text-gray-500">{presentation.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Presentations;
