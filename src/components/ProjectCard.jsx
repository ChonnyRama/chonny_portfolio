import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard({ imgSrc, imgSrcHover, title, tags, projectLink, classes }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={
        'relative rounded-2xl bg-zinc-800 p-4 ring-1 ring-inset ring-zinc-50/5 transition-colors hover:bg-zinc-700/50 active:bg-zinc-700/60' +
        classes
      }
    >
      <figure
        className="img-box mb-4 rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={isHovered ? imgSrcHover : imgSrc} alt={title} loading="lazy" className="img-contain" />
      </figure>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, index) => (
              <span className="grid h-8 items-center rounded-lg bg-zinc-50/5 px-3 text-sm text-zinc-400" key={index}>
                {label}
              </span>
            ))}
          </div>
        </div>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-400 text-zinc-950"
        >
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgSrcHover: PropTypes.string,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};
