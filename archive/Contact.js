import React from 'react';

const Contact = ({ personal }) => {
  return (
    <section id="contact" className="mb-24">
      <h2 className="text-3xl font-bold mb-12">Contact</h2>
      <div className="text-lg space-y-4">
        <p>{personal.location}</p>
        <p>
          <a 
            href={`mailto:${personal.email}`}
            className="text-gray-700 hover:text-gray-900 underline"
          >
            {personal.email}
          </a>
        </p>
        <p>
          <a 
            href={personal.linkedin}
            className="text-gray-700 hover:text-gray-900 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
