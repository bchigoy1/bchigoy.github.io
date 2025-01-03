import React from 'react';
import { portfolioData } from '../data/portfolio-data';

const Projects = () => {
  if (!portfolioData.products) return null;

  return (
    <section id="projects" className="mb-24">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="space-y-16">
        {portfolioData.products.map((product, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
            <div className="space-y-8">
              {product.projects.map((project, i) => (
                <div key={i}>
                  <h4 className="text-xl font-medium mb-2">{project.title}</h4>
                  <p className="text-lg text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
