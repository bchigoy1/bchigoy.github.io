import React, { useState } from 'react';
import { Presentation } from 'lucide-react';

function Learning({ learning, sectionId = 'presentations', expanded = false }) {
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
            style={{ backgroundColor: isOpen ? '#5E5E5C' : '#6E6E6C' }}
            onMouseEnter={e => { if (!isOpen) e.currentTarget.style.backgroundColor = '#5E5E5C'; }}
            onMouseLeave={e => { if (!isOpen) e.currentTarget.style.backgroundColor = '#6E6E6C'; }}
          >
            <span className="flex items-center gap-2">
              <Presentation size={20} />
              {isOpen ? 'Hide Presentations' : 'Presentations'}
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
          {Object.keys(learning.sections).map((sectionKey) => (
            <div key={sectionKey} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                {learning.sections[sectionKey].title}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {learning.sections[sectionKey].items.map((item, index) => (
                  <div key={index} className={expanded ? "mb-6" : "border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white"}>
                    <h4 className="text-base font-medium mb-2">{item.title}</h4>
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
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Learning;
