import React from 'react';
import { MapPin, Mail, Linkedin } from 'lucide-react';

const Header = ({ personal }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{personal.name}</h1>
            <p className="text-lg text-gray-600">{personal.title}</p>
            <p className="text-md text-gray-500">{personal.company}</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-gray-500" />
              <span>{personal.location}</span>
            </div>
            <a 
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Mail size={20} />
            </a>
            <a 
              href={`https://${personal.linkedin}`}
              className="flex items-center gap-2 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
