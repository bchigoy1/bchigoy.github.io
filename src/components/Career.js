import React from 'react';

const Career = ({ data }) => {
  if (!data) return null;

  return (
    <section id="career">
      <h2 className="text-xl font-bold mb-8">Journey</h2>
      <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
        {data.map((job, index) => (
          <div key={index} className="mb-12 relative">
            {/* Timeline dot - adjusted positioning */}
            <div className="absolute -left-[48px] w-4 h-4 bg-white border-2 border-gray-300 rounded-full top-1 transform translate-x-1/2"></div>
            
            {/* Content wrapper */}
            <div className="relative">
              {/* Period */}
              <div className="text-sm text-gray-500 mb-1">{job.period}</div>
              
              {/* Title with optional link */}
              <h3 className="text-sm font-semibold mb-2">
                {job.title.includes('@') ? (
                  <>
                    {job.title.split('@')[0]}@ 
                    {job.link ? (
                      <a href={job.link} className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                        {job.title.split('@')[1].trim()}
                      </a>
                    ) : (
                      job.title.split('@')[1].trim()
                    )}
                  </>
                ) : (
                  job.title
                )}
              </h3>
              
              {/* Location */}
              <div className="text-gray-600 text-sm mb-2">{job.location}</div>
              
              {/* Description */}
              <p className="text-gray-700 text-sm">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;