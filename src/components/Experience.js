import React from 'react';
import ContentRenderer from './ContentRenderer';

const Experience = ({ teamBuilding, infrastructure, improvingLives }) => {
  return (
    <div className="space-y-10 md:space-y-16">
      <section id="improving-lives">
        <h2 className="text-xl font-bold mb-4 text-brand-900">{improvingLives.title}</h2>
        <ContentRenderer content={improvingLives.content} />
      </section>

      <section id="team-building">
        <h2 className="text-xl font-bold mb-4 text-brand-900">{teamBuilding.title}</h2>
        <ContentRenderer content={teamBuilding.content} />
      </section>

      <section id="infrastructure">
        <h2 className="text-xl font-bold mb-4 text-brand-900">{infrastructure.title}</h2>
        <ContentRenderer content={infrastructure.content} />
      </section>
    </div>
  );
};

export default Experience;
