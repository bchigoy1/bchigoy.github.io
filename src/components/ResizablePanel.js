import React, { useState, useCallback } from 'react';

const ResizablePanel = ({ children, minWidth = 250, maxWidth = 600 }) => {
  const [width, setWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e) => {
      if (isResizing) {
        const newWidth = window.innerWidth - e.clientX;
        if (newWidth >= minWidth && newWidth <= maxWidth) {
          setWidth(newWidth);
        }
      }
    },
    [isResizing, minWidth, maxWidth]
  );

  React.useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div 
      className="fixed right-0 top-0 h-full border-l bg-white"
      style={{ width: width }}
    >
      {/* Drag handle */}
      <div
        className="absolute left-0 top-0 w-1 h-full cursor-col-resize hover:bg-blue-500 hover:opacity-50"
        onMouseDown={startResizing}
      />
      <div className="h-full overflow-y-auto p-6">
        {children}
      </div>
    </div>
  );
};

export default ResizablePanel;