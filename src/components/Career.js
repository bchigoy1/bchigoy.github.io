import React from 'react';

const Career = ({ data }) => {
  if (!data) return null;

  return (
    <section id="career">
      <h2 className="text-xl font-bold mb-8 text-brand-900">Journey</h2>
      <div className="relative border-l-2 border-brand-200 pl-8 ml-4">
        {data.map((job, index) => (
          <div key={index} className="mb-12 relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[48px] w-4 h-4 bg-brand-50 border-2 border-brand-400 group-hover:border-accent-500 group-hover:bg-accent-500 rounded-full top-1 transform translate-x-1/2 transition-colors"></div>

            {/* Content wrapper */}
            <div className="relative">
              <div className="text-sm text-brand-400 mb-1 font-medium">{job.period}</div>

              <h3 className="text-sm font-semibold mb-2 text-brand-800">
                {job.title.includes('@') ? (
                  <>
                    {job.title.split('@')[0]}@
                    {job.link ? (
                      <a href={job.link} className="hover:text-accent-600 transition-colors" target="_blank" rel="noopener noreferrer">
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

              <div className="text-brand-500 text-sm mb-2">{job.location}</div>
              <p className="text-brand-600 text-sm">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
