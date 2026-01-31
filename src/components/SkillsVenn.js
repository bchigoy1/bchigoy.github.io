import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';

const domains = [
  {
    id: 'product',
    label: 'Product & Leadership',
    cx: 200, cy: 195, r: 170,
    fill: 'rgba(59, 130, 246, 0.1)',
    stroke: 'rgba(59, 130, 246, 0.35)',
    activeFill: 'rgba(59, 130, 246, 0.22)',
    subcategories: [
      { key: 'LeadershipCommunication', label: 'Leadership & Communication' },
      { key: 'product', label: 'Product' },
    ],
    tagClass: 'bg-blue-50 text-blue-800 border border-blue-200',
    headerClass: 'text-blue-900',
    subheaderClass: 'text-blue-700',
    cardBg: 'bg-blue-50/50',
    cardBorder: 'border-blue-200',
  },
  {
    id: 'engineering',
    label: 'Data Engineering & Cloud',
    cx: 440, cy: 195, r: 170,
    fill: 'rgba(16, 185, 129, 0.1)',
    stroke: 'rgba(16, 185, 129, 0.35)',
    activeFill: 'rgba(16, 185, 129, 0.22)',
    subcategories: [
      { key: 'dataEngineering', label: 'Data Engineering' },
      { key: 'cloud', label: 'Cloud' },
    ],
    tagClass: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    headerClass: 'text-emerald-900',
    subheaderClass: 'text-emerald-700',
    cardBg: 'bg-emerald-50/50',
    cardBorder: 'border-emerald-200',
  },
  {
    id: 'analysis',
    label: 'Analysis & Geospatial',
    cx: 320, cy: 375, r: 170,
    fill: 'rgba(245, 158, 11, 0.1)',
    stroke: 'rgba(245, 158, 11, 0.35)',
    activeFill: 'rgba(245, 158, 11, 0.22)',
    subcategories: [
      { key: 'analysis', label: 'Analysis & AI' },
      { key: 'mapping', label: 'Mapping & GIS' },
      { key: 'visualization', label: 'Visualization' },
      { key: 'domain', label: 'Domain Expertise' },
    ],
    tagClass: 'bg-amber-50 text-amber-800 border border-amber-200',
    headerClass: 'text-amber-900',
    subheaderClass: 'text-amber-700',
    cardBg: 'bg-amber-50/50',
    cardBorder: 'border-amber-200',
  },
];


const SkillsVenn = () => {
  const { personal } = portfolioData;
  const [activeDomain, setActiveDomain] = useState(null);

  return (
    <section>
      <h2 className="section-header-text mb-1">Skills & Expertise</h2>
      <p className="text-gray-500 italic mb-8 text-sm">"The Venn diagram is small."</p>

      {/* SVG Venn Diagram — desktop */}
      <div className="hidden md:flex justify-center mb-10">
        <svg
          viewBox="0 0 640 560"
          className="w-full"
          style={{ maxWidth: 600 }}
        >
          {/* Circles */}
          {domains.map((d) => (
            <circle
              key={d.id}
              cx={d.cx}
              cy={d.cy}
              r={d.r}
              fill={activeDomain === d.id ? d.activeFill : d.fill}
              stroke={d.stroke}
              strokeWidth={2}
              className="cursor-pointer transition-colors duration-300"
              onClick={() => setActiveDomain(activeDomain === d.id ? null : d.id)}
              onMouseEnter={() => setActiveDomain(d.id)}
              onMouseLeave={() => setActiveDomain(null)}
            />
          ))}

        </svg>
      </div>

      {/* Skill detail cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((domain) => {
          const isActive = activeDomain === domain.id;
          return (
            <div
              key={domain.id}
              className={`rounded-xl border p-5 transition-all duration-300 ${domain.cardBorder} ${
                isActive ? `${domain.cardBg} shadow-md scale-[1.02]` : 'bg-white/60'
              }`}
              onMouseEnter={() => setActiveDomain(domain.id)}
              onMouseLeave={() => setActiveDomain(null)}
            >
              <h3 className={`font-semibold text-base mb-4 ${domain.headerClass}`}>
                {domain.label}
              </h3>
              {domain.subcategories.map((cat) => {
                const skills = personal.skills[cat.key];
                if (!skills) return null;
                return (
                  <div key={cat.key} className="mb-3 last:mb-0">
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1.5 ${domain.subheaderClass}`}>
                      {cat.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-xs px-2 py-0.5 rounded-full ${domain.tagClass}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsVenn;
