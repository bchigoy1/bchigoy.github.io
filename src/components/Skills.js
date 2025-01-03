import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="mb-24">
      <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-4 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="text-lg text-gray-700">
              {items.join(' • ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
