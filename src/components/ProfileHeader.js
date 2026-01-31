import React from 'react';
import { Link } from 'react-router-dom';
import {
  FlaskConical,
  BrainCircuit,
  Package,
  FolderKanban,
  Presentation,
  Target,
} from 'lucide-react';

const ProfileHeader = ({ personal }) => {
  const navItems = [
    { to: '/research', text: 'Research & Product Innovation', icon: FlaskConical },
    { to: '/ai', text: 'AI', icon: BrainCircuit },
    { to: '/products', text: 'Products', icon: Package },
    { to: '/projects', text: 'Projects', icon: FolderKanban },
    { to: '/presentations', text: 'Presentations', icon: Presentation },
    { to: '/skills', text: 'Skills', icon: Target },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile picture */}
        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-accent-500 ring-offset-2 ring-offset-gray-50 shrink-0">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt={personal.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-brand-900">
            <Link to="/" className="hover:text-brand-700 transition-colors">{personal.name}</Link>
          </h1>
          <p className="text-base text-gray-600 italic mt-1 mb-3">{personal.title}</p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-base text-gray-600 mb-3">
            <span>{personal.location}</span>
            <a href={`mailto:${personal.email}`} className="text-blue-600 hover:underline">
              {personal.email}
            </a>
            <a href="mailto:byron.chigoy@common-metrics.com" className="text-blue-600 hover:underline">
              byron.chigoy@common-metrics.com
            </a>
            <a href="tel:+15129703965" className="text-blue-600 hover:underline">
              (512) 970-3965
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-base">
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              LinkedIn
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/ByronChigoy_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Portfolio nav */}
      <nav className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-200">
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-1.5 text-base text-gray-600 hover:text-brand-900 hover:bg-gray-100 rounded-md px-3 py-1.5 transition-colors"
            >
              <Icon size={16} className="shrink-0 text-gray-400" />
              {item.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default ProfileHeader;
