import { ButtonOutline, ButtonPrimary } from './Button';

export default function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box h-9 w-9 rounded-lg">
              <img src="/images/avatar.jpg" alt="Chonny Portrait" width={40} height={40} className="cover-img" />
            </figure>

            <div className="flex items-center gap-1.5 text-sm tracking-wide text-zinc-400">
              <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 mb-8 mt-5 max-w-[15ch] sm:max-w-[5ch] lg:mb-10 lg:max-w-[15ch]">
            Building modern websites, one line at a time
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" href="/cv/Chonny_resume.pdf" />
            <ButtonOutline href="#about" label="Learn more" icon="arrow_downward" />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="relative ml-auto max-h-[500px] w-full max-w-[480px] overflow-hidden rounded-[60px]">
            <img
              src="/images/avatar.jpg"
              width={656}
              height={800}
              alt="Chonny Martin"
              className="mask-image w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
