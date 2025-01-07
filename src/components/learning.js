// src/components/Projects.js
import React, { useState } from 'react';

function Projects({ projects }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold">A Selection of My Projects</h2>
      <button 
        onClick={toggleContent} 
        className={`mt-4 p-2 rounded text-white ${isOpen ? 'bg-black text-white' : 'bg-gray-500 text-white'} hover:bg-opacity-80`}
      >
        {isOpen ? 'Hide Projects' : 'Show Projects'}
      </button>

      {isOpen && (
        <div className="mt-4">
          {Object.keys(projects).map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold">{category.replace(/([A-Z])/g, ' $1')}</h3>
              {projects[category].map((project, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium">{project.title}</h4>
                  <ul className="list-disc ml-6">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
