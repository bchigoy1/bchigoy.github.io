import React, { useState } from 'react';

const Sidebar = ({ personal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', text: 'Hello!' },
    { href: '#background', text: 'Team Building and Leadership' },
    { href: '#team-building', text: 'Team Building and Leadership' },
    { href: '#infrastructure', text: 'Creating Infrastructure Innovation' },
    { href: '#improving-lives', text: 'Creating Infrastructure Innovation' },
    { href: '#research', text: 'Research Impact & Innovation' },
    { href: '#products', text: 'Products' },
    { href: '#projects', text: 'Projects' },
    { href: '#presentations', text: 'Presentations' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar Content */}
      <div className={`
        md:block
        ${isOpen ? 'block' : 'hidden'}
        fixed md:relative
        inset-0 md:inset-auto
        z-40 md:z-0
        w-64 md:w-auto
        bg-white
        overflow-y-auto
        border-r
      `}>
        <div className="p-6 h-full">
          <div className="mb-6">
            <div className="w-24 md:w-32 h-24 md:h-32 rounded-full overflow-hidden mx-auto">
              <img 
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                alt={personal.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-center">{personal.name}</h1>
            <p className="text-sm md:text-base text-gray-600 text-center mb-6">{personal.title}</p>
          </div>

          <nav className="space-y-4 mb-8">
            {navItems.map(item => (
              <a 
                key={item.href}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </nav>

          {/* Skills section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold mb-4">Skills</h3>
            {Object.entries(personal.skills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span 
                      key={skill}
                      className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t">
            <h3 className="text-sm font-semibold mb-2">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{personal.location}</p>
              <a href={`mailto:${personal.email}`} className="hover:text-gray-900">
                {personal.email}
              </a>
              <a 
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 block"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;