import React from 'react';
import ContentRenderer from './ContentRenderer';

const Experience = ({ teamBuilding, infrastructure, improvingLives }) => {
  return (
    <>
      {/* <section id="team-building" className="mb-24"> */}
      <section id="team-building">

        <h2 className="text-xl font-bold mb-4">{teamBuilding.title}</h2>
        <ContentRenderer content={teamBuilding.content} />
      </section>

      {/* <section id="infrastructure" className="mb-24"> */}
      <section id="infrastructure">

        <h2 className="text-xl font-bold mb-4">{infrastructure.title}</h2>
        <ContentRenderer content={infrastructure.content} />
      </section>

      {/* <section id="improving-lives" className="mb-24"> */}
      <section id="improving-lives">

        <h2 className="text-xl font-bold mb-4">{improvingLives.title}</h2>
        <ContentRenderer content={improvingLives.content} />
      </section>
    </>
  );
};

export default Experience;
