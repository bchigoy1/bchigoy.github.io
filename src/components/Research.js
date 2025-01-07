import React from 'react';
import ContentRenderer from './ContentRenderer';

const Research = ({ data }) => {
  if (!data) return null;

  return (
    // <section id="research" className="mb-24">
    <section id="research">

      <h2 className="text-xl font-bold mb-4">{data.title}</h2>
      <ContentRenderer content={data.content} />
    </section>
  );
};

export default Research;