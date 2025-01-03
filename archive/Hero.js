import React from 'react';

const Hero = () => {
  return (
    <div className="relative mb-16">
      {/* Banner Image */}
      <div className="w-full h-80 bg-slate-100 relative overflow-hidden">
        <svg viewBox="0 0 1200 300" className="w-full h-full">
          {/* Mountains */}
          <path 
            d="M0 250 L200 100 L400 200 L600 150 L800 180 L1000 120 L1200 250 L1200 300 L0 300 Z" 
            fill="#E5E7EB"
          />
          {/* Sun */}
          <circle cx="800" cy="80" r="30" fill="#FCD34D" />
          {/* Land */}
          <path 
            d="M0 250 L1200 250 L1200 300 L0 300 Z" 
            fill="#FDE68A"
          />
          {/* Plants (simplified) */}
          <path 
            d="M100 250 C200 200, 300 150, 400 250" 
            stroke="#047857"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Profile Picture */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`} 
            alt="Byron Chigoy"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
