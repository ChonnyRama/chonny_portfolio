const aboutItems = [
  {
    label: 'Projects done',
    number: 45,
  },
  {
    label: 'Years of experience',
    number: 4,
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-4 text-zinc-300 md:mb-8 md:max-w-[60ch] md:text-xl">
            Welcome! I&apos;m Chonny, a full-stack web developer that&apos;s always learning and growing. I&apos;m
            focused on building web applications using modern technologies and I&apos;m always looking forward to
            collaborate with and learn from other developers.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="font-semibold text-sky-400 md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
