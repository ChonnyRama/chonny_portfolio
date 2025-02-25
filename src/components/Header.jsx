import Navbar from './Navbar';
import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <header className="fixed left-0 top-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900/0">
      <div className="max-w-screen-3xl mx-auto flex w-full items-center justify-between px-4 md:grid md:grid-cols-[1fr_3fr_1fr] md:px-6">
        <h1>
          <a href="/" className="logo font-code animate-shadow-dance text-3xl">
            Chonny Martin
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={handleClick}>
            <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
          Contact Me
        </a>
      </div>
    </header>
  );
}
