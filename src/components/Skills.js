import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
