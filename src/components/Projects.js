import React, { useState } from 'react';

function Projects({ projects, sectionId = 'projects' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const renderDetail = (detail) => {
    if (!detail) return null;
    if (typeof detail === 'string') return detail;
    if (detail.type === 'link') {
      if (detail.href) {
        return (
          <a 
            href={detail.href}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {detail.text}
          </a>
        );
      }
      return detail.text;
    }
    if (detail.text) return detail.text;
    return null;
  };

  return (
    <section id={sectionId} className="mb-8">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleContent}
          className={`mt-4 p-2 rounded text-white font-bold text-lg ${
            isOpen
              ? 'bg-gray-500 text-black hover:bg-gray-500 text-left'
              : 'bg-gray-500 text-black hover:bg-gray-500 text-left'
          } w-full`}
        >
          {isOpen ? 'Hide Projects' : 'Projects'}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4">
          {Object.keys(projects.sections).map((sectionKey) => (
            <div key={sectionKey} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                {projects.sections[sectionKey].title}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {projects.sections[sectionKey].items.map((item, index) => (
                  <div key={index} className="relative border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="group relative">
                      <h4 className="text-base font-medium mb-2">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                        {item.agency && (
                          <span className="ml-1">
                            {' @ '}
                            {item.agency}
                          </span>
                        )}
                      </h4>
                      {item.tooltip && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full ml-2 z-10 bg-gray-800 text-white p-2 rounded-md text-sm w-96">
                          {item.tooltip}
                        </div>
                      )}
                      <ul className="list-disc ml-6">
                        {item.details.map((detail, detailIndex) => {
                          const renderedDetail = renderDetail(detail);
                          return renderedDetail ? (
                            <li key={detailIndex} className="text-sm">
                              {renderedDetail}
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;