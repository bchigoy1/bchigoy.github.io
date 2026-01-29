import React from 'react';

const Banner = () => (
  <div className="h-40 md:h-64 w-full relative overflow-hidden rounded-b-lg mb-8">
    <img
      src={`${process.env.PUBLIC_URL}/images/library_of_babel.jpeg`}
      alt="Library of Babel"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
  </div>
);

export default Banner;
