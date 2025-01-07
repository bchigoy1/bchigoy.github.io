import React from 'react';
import ContentRenderer from './ContentRenderer';

const Background = ({ data }) => {
  if (!data) return null;

  return (
    // <section id="background" className="mb-24">
    <section id="background">
      <h2 className="text-xl font-bold mb-4">{data.title}</h2>
      <ContentRenderer content={data.content} />
    </section>
  );
};

export default Background;