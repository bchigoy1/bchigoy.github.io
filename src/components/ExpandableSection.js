import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandableSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="border-t border-gray-200 py-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isExpanded && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default ExpandableSection;
