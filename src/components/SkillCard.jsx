import PropTypes from 'prop-types';

export default function SkillCard({ imgSrc, label, desc, classes, customClass }) {
  return (
    <div
      className={
        'group flex items-center gap-3 rounded-2xl p-3 ring-2 ring-inset ring-zinc-50/10 transition-colors hover:bg-zinc-800 ' +
        classes
      }
    >
      <figure className="h-12 w-12 overflow-hidden rounded-lg bg-zinc-700/50 p-2 transition-colors group-hover:bg-zinc-900">
        <img src={imgSrc} alt={label} width={32} height={32} className={customClass} />
      </figure>
      <div className="">
        <h3 className="">{label}</h3>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classed: PropTypes.string,
  customClass: PropTypes.string,
};
