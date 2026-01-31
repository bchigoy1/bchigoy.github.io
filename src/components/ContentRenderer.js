import React, { useState } from 'react';

const ContentRenderer = ({ content }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  if (!content) return null;

  const openModal = (imageContent) => {
    setSelectedImage(imageContent);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderSingleItem = (item, index) => {
    if (!item) return null;

    if (typeof item === 'string') {
      return item;
    }

    if (Array.isArray(item)) {
      return (
        <p key={index} className="text-gray-600 text-base leading-5 mb-0.5">
          {item.map((subItem, i) => renderSingleItem(subItem, `${index}-${i}`))}
        </p>
      );
    }

    switch (item.type) {
      case 'link':
        return (
          <a 
            key={index} 
            href={item.href} 
            className={`text-blue-600 hover:underline ${item.className || ''}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {item.text}
          </a>
        );

      case 'image':
        return (
          <div key={index} className="my-4">
            <img
              src={item.src}
              alt={item.alt}
              className="h-48 object-contain cursor-pointer hover:opacity-90 transition-opacity rounded shadow"
              onClick={() => openModal(item)}
            />
          </div>
        );

      case 'bold':
        return (
          <strong key={index}>{item.text}</strong>
        );

      case 'italic':
        return (
          <em key={index}>{item.text}</em>
        );

      case 'heading':
        return (
          <h3 key={index} className="text-lg font-semibold text-brand-900 mt-2">
            {item.text}
          </h3>
        );

      case 'bullet':
        return (
          <li key={index} className="text-gray-600 text-base">
            {renderBulletContent(item.content)}
          </li>
        );

      default:
        return null;
    }
  };

  const renderBulletContent = (bulletContent) => {
    if (!bulletContent) return null;

    if (typeof bulletContent === 'string') {
      return bulletContent;
    }

    if (Array.isArray(bulletContent)) {
      return bulletContent.map((item, i) =>
        typeof item === 'string' ? item : renderSingleItem(item, i)
      );
    }

    return renderSingleItem(bulletContent, 'nested');
  };

  const items = Array.isArray(content) ? content : [content];
  const hasBullets = items.some(item => item && item.type === 'bullet');

  return (
    <>
      <div className="space-y-0.5 mb-4">
        {!hasBullets ? (
          items.map((item, index) => renderSingleItem(item, index))
        ) : (
          items.map((item, index) => {
            if (item.type === 'bullet') {
              return (
                <ul key={index} className="text-gray-600 text-base list-disc ml-5 space-y-2">
                  {renderSingleItem(item, index)}
                </ul>
              );
            }
            return renderSingleItem(item, index);
          })
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2"
          onClick={closeModal}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
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
    </>
  );
};

export default ContentRenderer;