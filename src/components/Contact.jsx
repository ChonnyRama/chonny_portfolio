import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://github.com/ChonnyRama',
    icon: <FaGithub />,
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/chonnyrama/',
    icon: <FaLinkedin />,
    alt: 'LinkedIn',
  },
];
export default function Contact() {
  return (
    <section className="mt-20" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-4 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-x-[12ch]">Contact me here!</h2>
          <p className="mb-4 mt-3 max-w-[50ch] text-zinc-400 lg:max-w-[30ch]">
            Reach out today to discuss your project needs, and let&apos;s discuss how we can work together!
          </p>
          <div className="mb-auto flex items-center gap-2">
            {socialLinks.map(({ href, icon, alt }, index) => (
              <a
                key={index}
                href={href}
                alt={alt}
                target="_blank"
                className="grid h-10 w-10 place-items-center rounded-lg ring-2 ring-inset ring-zinc-50/5 transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <form action="https://getform.io/f/aejrljeb" className="xl:pl-10 2xl:pl-20" method="POST">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="text-field"
                autoComplete="name"
                required
                placeholder="Chonny Martin"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="text-field"
                autoComplete="email"
                required
                placeholder="chonny@example.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label"></label>
            <textarea
              name="message"
              id="message"
              className="text-field max-h-80 min-h-32 resize-y"
              placeholder="Hello!"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full max-w-full justify-center">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
