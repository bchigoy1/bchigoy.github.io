import React from 'react';
import ContentRenderer from './ContentRenderer';

const Research = ({ data }) => {
  if (!data) return null;

  return (
    <section id="research">
      <h2 className="text-2xl font-bold mb-4 text-brand-900">{data.title}</h2>
      <ContentRenderer content={data.content} />
    </section>
  );
};

export default Research;
