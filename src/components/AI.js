import React, { useState } from 'react';
import { BrainCircuit } from 'lucide-react';

function AI({ ai, sectionId = 'ai', expanded = false }) {
  const [isOpen, setIsOpen] = useState(expanded);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
              <BrainCircuit size={20} />
              {isOpen ? 'Hide AI' : 'AI'}
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
          {Object.keys(ai.sections).map((sectionKey) => (
            <div key={sectionKey} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                {ai.sections[sectionKey].title}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {ai.sections[sectionKey].items.map((item, index) => (
                  <div key={index} className="relative border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
                    <div className="flex flex-col gap-4">
                      <div className="flex-1">
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
                        </h4>
                        {item.details && item.details.length > 0 && (
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
                        )}
                      </div>
                      {item.image && (
                        <div className="w-full flex justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-32 object-contain rounded cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => openModal(item.image)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2"
          onClick={closeModal}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <img
              src={selectedImage}
              alt="AI detail"
              className="max-h-[95vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default AI;
