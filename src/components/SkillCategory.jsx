import SkillCard from './SkillCard';
import PropTypes from 'prop-types';
import { FaComputer, FaServer, FaNetworkWired, FaCloud } from 'react-icons/fa6';

const iconMap = {
  'Front-end Development': <FaComputer />,
  'Back-end Development': <FaServer />,
  'DevOps Tools': <FaNetworkWired />,
  'Cloud Platforms': <FaCloud />,
};

export default function SkillCategory({ skillArray, category }) {
  const icon = iconMap[category];
  return (
    <div className="">
      <h3 className="mb-3 flex items-center gap-2">
        {icon}
        {category}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-2">
        {skillArray.map(({ imgSrc, label, desc }, index) => (
          <SkillCard
            key={index}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
            customClass={label === 'MongoDB' ? 'w-9 h-9 object-contain' : ''}
          />
        ))}
      </div>
    </div>
  );
}

SkillCategory.propTypes = {
  skillArray: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};
