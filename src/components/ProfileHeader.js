import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  FlaskConical,
  FolderKanban,
  Presentation,
  Target,
  Mail,
} from 'lucide-react';

const ProfileHeader = ({ personal, showProfile = false }) => {
  const navItems = [
    ...(!showProfile ? [{ to: '/', text: 'Home', icon: Home }] : []),
    { to: '/innovation', text: 'Innovation and Products', icon: FlaskConical },
    { to: '/projects', text: 'Projects', icon: FolderKanban },
    { to: '/presentations', text: 'Presentations', icon: Presentation },
    { to: '/skills', text: 'Skills', icon: Target },
    { to: '/contact', text: 'Contact+Resume', icon: Mail },
  ];

  return (
    <div className="mb-8">
      {/* Portfolio nav */}
      <nav className="flex flex-nowrap gap-0.5 pb-4 mb-6 border-b border-gray-200 overflow-x-auto">
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-1 text-base text-gray-600 hover:text-brand-900 hover:bg-gray-100 rounded-md px-2 py-1.5 transition-colors whitespace-nowrap"
            >
              <Icon size={16} className="shrink-0 text-gray-400" />
              {item.text}
            </Link>
          );
        })}
      </nav>

      {showProfile && (
        <div className="flex flex-col md:flex-row md:items-center items-center gap-4 md:justify-end">
          {/* Info */}
          <div className="text-center md:text-left">
            {Array.isArray(personal.title) ? (
              <div className="text-base text-gray-600 italic space-y-0.5">
                {personal.title.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <p className="text-base text-gray-600 italic">{personal.title}</p>
            )}
          </div>

          {/* Profile picture */}
          <div className="shrink-0 border-2 border-gray-600 rounded-md bg-gray-50 w-36 h-44 overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt={personal.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
