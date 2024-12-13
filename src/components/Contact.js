import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = ({ personal }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-gray-500" />
            <a href={`mailto:${personal.email}`} className="text-blue-600 hover:underline">
              {personal.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="text-gray-500" />
            <a 
              href={`https://${personal.linkedin}`}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-gray-500" />
            <span>{personal.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
