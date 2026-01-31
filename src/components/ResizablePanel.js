import React, { useState, useCallback, useEffect } from 'react';

const ResizablePanel = ({ children, minWidth = 250, maxWidth = 600, onWidthChange }) => {
  const [width, setWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
      if (window.innerWidth < 768) {
        setWidth(window.innerWidth);
      } else {
        setWidth(300); // Reset to default on desktop
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (onWidthChange) {
      onWidthChange(isMobile ? 0 : width);
    }
  }, [width, isMobile, onWidthChange]);

  const startResizing = useCallback(() => {
    if (!isMobile) setIsResizing(true);
  }, [isMobile]);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e) => {
      if (isResizing && !isMobile) {
        const newWidth = window.innerWidth - e.clientX;
        if (newWidth >= minWidth && newWidth <= maxWidth) {
          setWidth(newWidth);
        }
      }
    },
    [isResizing, minWidth, maxWidth, isMobile]
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div
      className={`
        ${isMobile ? 'relative w-full border-t' : 'fixed right-0 top-0 h-full border-l'}
        bg-white
      `}
      style={{ width: isMobile ? '100%' : width }}
    >
      {/* Drag handle - only show on desktop */}
      {!isMobile && (
        <div
          className="absolute left-0 top-0 w-1 h-full cursor-col-resize hover:bg-blue-500 hover:opacity-50"
          onMouseDown={startResizing}
        />
      )}
      <div className={`${isMobile ? '' : 'h-full'} overflow-y-auto p-4 md:p-6`}>
        {children}
      </div>
    </div>
  );
};

export default ResizablePanel;
