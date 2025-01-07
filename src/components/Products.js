import React, { useState } from 'react';

function Products({ products, sectionId = 'products' }) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <section id={sectionId} className="mb-8">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleContent}
          className={`mt-4 p-2 rounded text-white font-bold text-lg ${
            isOpen
              ? 'bg-gray-200 text-black hover:bg-gray-200 text-left'
              : 'bg-gray-200 text-black hover:bg-gray-200 text-left'
          } w-full`}
        >
          {isOpen ? 'Hide Products' : 'Products'}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4">
          {Object.keys(products.sections).map((sectionKey) => (
            <div key={sectionKey} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                {products.sections[sectionKey].title}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {products.sections[sectionKey].items.map((item, index) => (
                  <div key={index} className="relative border rounded-lg p-4 hover:shadow-lg transition-shadow">
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
                        {item.users && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Users: </span>
                            {item.users}
                          </p>
                        )}
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
              alt="Product detail"
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

export default Products;