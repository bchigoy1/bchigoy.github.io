import React from 'react';

const Header = ({ personal }) => {
  return (
    <div className="nav-block mb-12">
      <h1 className="text-4xl font-bold mb-8">{personal.name}</h1>
      <nav className="space-y-2">
        <a href="#summary" className="block text-gray-600 hover:text-gray-900">Summary</a>
        <a href="#experience" className="block text-gray-600 hover:text-gray-900">Experience</a>
        <a href="#projects" className="block text-gray-600 hover:text-gray-900">Projects</a>
        <a href="#presentations" className="block text-gray-600 hover:text-gray-900">Presentations</a>
        <a href="#contact" className="block text-gray-600 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
