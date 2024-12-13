import React from 'react';
import { portfolioData } from '../data/portfolio-data';

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Products & Projects</h2>
      {portfolioData.products.map((product, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {product.projects.map((project, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
