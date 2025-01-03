import React from 'react';

const Sidebar = ({ personal }) => {
  const navItems = [
    { href: '#about', text: 'About' },
    { href: '#team-building', text: 'Team Building' },
    { href: '#infrastructure', text: 'Infrastructure' },
    { href: '#improving-lives', text: 'Data Impact' },
    { href: '#research', text: 'Research' },
    { href: '#teaching', text: 'Teaching' },
    { href: '#background', text: 'Background' }
  ];

  return (
    <div className="p-6 h-full bg-white border-r">
      <div className="mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt={personal.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="text-2xl font-bold mt-4 mb-2 text-center">{personal.name}</h1>
        <p className="text-gray-600 text-center mb-6">{personal.title}</p>
      </div>

      <nav className="space-y-4 mb-8">
        {navItems.map(item => <a 
          key={item.href}
          href={item.href}
          className="block text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item.text}
        </a>)}
      </nav>

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
            className="hover:text-gray-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
