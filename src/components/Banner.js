import React from 'react';

const Banner = () => (
  <div className="h-80 w-full relative overflow-hidden">
    <img
      src={`${process.env.PUBLIC_URL}/images/library_of_babel.jpeg`}
      alt="Mountain landscape"
      className="w-full h-full object-cover"
    />
  </div>
);

export default Banner; 
