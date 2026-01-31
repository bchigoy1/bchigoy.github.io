import React, { useState } from 'react';
import { FolderKanban } from 'lucide-react';

function Projects({ projects, sectionId = 'projects', expanded = false }) {
  const [isOpen, setIsOpen] = useState(expanded);

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

  const showContent = expanded || isOpen;

  return (
    <section id={sectionId}>
      {!expanded && (
        <div className="flex justify-between items-center">
          <button
            onClick={toggleContent}
            className="p-3 rounded-lg font-bold text-lg w-full text-left touch-manipulation transition-colors text-white flex items-center justify-between"
            style={{ backgroundColor: isOpen ? '#6E6E6C' : '#848482' }}
            onMouseEnter={e => { if (!isOpen) e.currentTarget.style.backgroundColor = '#6E6E6C'; }}
            onMouseLeave={e => { if (!isOpen) e.currentTarget.style.backgroundColor = '#848482'; }}
          >
            <span className="flex items-center gap-2">
              <FolderKanban size={20} />
              {isOpen ? 'Hide Projects' : 'Projects'}
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {showContent && (
        <div className={expanded ? '' : 'mt-4'}>
          {Object.keys(projects.sections).map((sectionKey) => (
            <div key={sectionKey} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                {projects.sections[sectionKey].title}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {projects.sections[sectionKey].items.map((item, index) => (
                  <div key={index} className={expanded ? "mb-6" : "relative border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white"}>
                    <div className="group">
                      <div className="relative">
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
                          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 top-full z-20 bg-gray-800 text-white p-3 rounded-md text-sm max-w-xl shadow-lg">
                            {item.tooltip}
                          </div>
                        )}
                      </div>
                      <ul className="list-disc ml-6">
                        {item.details.map((detail, detailIndex) => {
                          const renderedDetail = renderDetail(detail);
                          return renderedDetail ? (
                            <li key={detailIndex} className="text-base text-gray-600">
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
