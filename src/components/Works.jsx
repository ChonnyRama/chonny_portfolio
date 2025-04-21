import React from 'react';
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: 'dungeonFlowLanding.png',
    imgSrcHover: 'dungeonFlowChart.png',
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
          {works.map(({ imgSrc, imgSrcHover, title, tags, projectLink }, index) => (
            <ProjectCard
              key={index}
              imgSrc={imgSrc}
              imgSrcHover={imgSrcHover}
              title={title}
              tags={tags}
              projectLink={projectLink}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
