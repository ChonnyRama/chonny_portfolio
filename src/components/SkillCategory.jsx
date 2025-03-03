import SkillCard from './SkillCard';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaComputer, FaServer, FaNetworkWired, FaCloud } from 'react-icons/fa6';

const iconMap = {
  'Front-end Development': <FaComputer />,
  'Back-end Development': <FaServer />,
  'DevOps Tools': <FaNetworkWired />,
  'Cloud Platforms': <FaCloud />,
};

export default function SkillCategory({ skillArray, category }) {
  const icon = iconMap[category];
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (e) => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="">
      <h3 className="mb-3 flex cursor-pointer items-center gap-2" onClick={handleClick}>
        {icon}
        {category}
      </h3>
      <div
        className={`grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-2 overflow-hidden transition-[opacity,max-height] duration-500 ease-in-out ${isVisible ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}`}
      >
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
