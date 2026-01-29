import React, { useState } from 'react';
import {
  User,
  Mountain,
  Briefcase,
  Users,
  Building2,
  FlaskConical,
  BrainCircuit,
  Package,
  FolderKanban,
  Presentation,
} from 'lucide-react';

const Sidebar = ({ personal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', text: 'Hello!', icon: User },
    { href: '#background', text: 'Background & Exploration', icon: Mountain },
    { href: '#improving-lives', text: 'Product Development Impact', icon: Briefcase },
    { href: '#team-building', text: 'Team Building and Leadership', icon: Users },
    { href: '#infrastructure', text: 'Infrastructure Innovation', icon: Building2 },
    { href: '#research', text: 'Research & Product Innovation', icon: FlaskConical },
    { href: '#ai', text: 'AI', icon: BrainCircuit },
    { href: '#products', text: 'Products', icon: Package },
    { href: '#projects', text: 'Projects', icon: FolderKanban },
    { href: '#presentations', text: 'Presentations', icon: Presentation },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-brand-800 text-white p-2 rounded-md shadow-lg"
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
        bg-brand-900
        overflow-y-auto
        border-r border-brand-800
      `}>
        <div className="p-6 h-full">
          <div className="mb-6">
            <div className="w-24 md:w-32 h-24 md:h-32 rounded-full overflow-hidden mx-auto ring-4 ring-accent-500 ring-offset-2 ring-offset-brand-900">
              <img
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                alt={personal.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold mt-4 mb-1 text-center text-white">{personal.name}</h1>
            <p className="text-sm md:text-base text-brand-300 text-center mb-6">{personal.title}</p>
          </div>

          <nav className="space-y-1 mb-8">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-brand-200 hover:text-white hover:bg-brand-800 rounded-md px-3 py-2 transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={16} className="shrink-0 text-accent-400" />
                  {item.text}
                </a>
              );
            })}
          </nav>

          {/* Skills section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold mb-4 text-brand-300 uppercase tracking-wider">Skills</h3>
            {Object.entries(personal.skills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h4 className="text-xs uppercase tracking-wider text-brand-400 mb-2">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="inline-block text-xs bg-brand-800 text-brand-200 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-brand-700">
            <h3 className="text-sm font-semibold mb-2 text-brand-300 uppercase tracking-wider">Contact</h3>
            <div className="space-y-2 text-sm text-brand-300">
              <p>{personal.location}</p>
              <a href={`mailto:${personal.email}`} className="hover:text-accent-400 transition-colors block">
                {personal.email}
              </a>
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-400 transition-colors block"
              >
                LinkedIn
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/ByronChigoy_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-400 transition-colors block"
              >
                Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
