import React from 'react';
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: 'Lei3cmX.png',
    title: 'Full Stack Dungeons and Dragons App',
    tags: ['API', 'SQL', 'Development', 'AI'],
    projectLink: 'https://dungeon-flow.onrender.com',
  },
];
export default function Works() {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">Portfolio Highlights</h2>
        <div className="">
          {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCard key={index} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
