import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initialActiveBox = () => {
    //setting position of active box and making it visible by defining height and width
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  useEffect(initialActiveBox, []);
  window.addEventListener('resize', initialActiveBox);

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink,
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Skills',
      link: '#skills',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
    },
  ];

  const handleClick = (e) => {
    lastActiveLink.current?.classList.remove('active');
    e.target.classList.add('active');
    lastActiveLink.current = e.target;
    //set active box
    activeBox.current.style.top = e.target.offsetTop + 'px';
    activeBox.current.style.left = e.target.offsetLeft + 'px';
    activeBox.current.style.width = e.target.offsetWidth + 'px';
    activeBox.current.style.height = e.target.offsetHeight + 'px';
  };
  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a href={link} className={className} ref={ref} key={key} onClick={handleClick}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
