import React from 'react';
import { ButtonPrimary } from './Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Contact me',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/ChonnyRama',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chonnyrama/',
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/ChonnyRama',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/chonnyrama/',
  },
];

export default function Footer() {
  return (
    <footer className="">
      <section className="section">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Work with me Today!</h2>
              <ButtonPrimary href="mailto:johnnyramartin@gmail.com" label="Start project" icon="chevron_right" />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:pl-20">
              <div>
                <p className="mb-2">Sitemap</p>
                <ul>
                  {sitemap.map(({ label, href }, index) => (
                    <li key={index}>
                      <a href={href} className="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2">Socials</p>
                <ul>
                  {socials.map(({ label, href }, index) => (
                    <li key={index}>
                      <a
                        href={href}
                        className="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                        target="_blank"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-8 flex justify-end pt-10">
            <p className="text-sm text-zinc-500">
              &copy; 2025 <span className="text-zinc-200">chonnyrama</span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
