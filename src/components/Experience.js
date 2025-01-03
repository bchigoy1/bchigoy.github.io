import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import ContentRenderer from './ContentRenderer';

const Experience = () => {
 const { teamBuilding, infrastructure, improvingLives } = portfolioData.sections;
 
 return (
   <>
     <section id="team-building" className="mb-24">
       <h2 className="text-3xl font-bold mb-6">{teamBuilding.title}</h2>
       <ContentRenderer content={teamBuilding.content} />
     </section>

     <section id="infrastructure" className="mb-24">
       <h2 className="text-3xl font-bold mb-6">{infrastructure.title}</h2>
       <ContentRenderer content={infrastructure.content} />
     </section>

     <section id="improving-lives" className="mb-24">
       <h2 className="text-3xl font-bold mb-6">{improvingLives.title}</h2>
       <ContentRenderer content={improvingLives.content} />
     </section>
   </>
 );
};

export default Experience;
