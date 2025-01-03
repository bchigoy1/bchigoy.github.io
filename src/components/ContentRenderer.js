import React from 'react';

const ContentRenderer = ({ content }) => {
  if (!content) return null;

  const renderContent = (item, index) => {
    if (typeof item === 'string') {
      return (
        <span key={index} className="text-gray-600 text-lg leading-relaxed">
          {item}
        </span>
      );
    }

    switch (item.type) {
      case 'image':
        return <img key={index} src={item.src} alt={item.alt} className="mb-8" />;
      case 'link':
        return (
          <a
            key={index}
            href={item.href}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.text}
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 mb-10">
      {Array.isArray(content)
        ? content.map((item, index) => renderContent(item, index))
        : renderContent(content, 0)}
    </div>
  );
};

export default ContentRenderer;

