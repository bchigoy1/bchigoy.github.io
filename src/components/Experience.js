import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p className="text-lg text-gray-600">{job.role}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">{job.period}</p>
                <p className="text-gray-500">{job.location}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="text-gray-700">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
