import React from 'react';

const ContentSection = ({ title, children }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);

export default ContentSection;
