export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.55]"
        src="/front_pic/viber_image_2026-06-19_10-10-12-507.jpg"
        alt="Rocky and Rachel"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(74,122,150,0.25)] via-[rgba(43,58,74,0.55)] to-[rgba(43,58,74,0.75)]" />

      <div className="relative z-10 text-white px-8">
        {/* "Together with their families" — blurs up first */}
        <p className="animate-hero-1 text-[0.75rem] tracking-[0.35em] uppercase text-dusty-light mb-5">
          Together with their families
        </p>

        {/* Names — slower, more dramatic entrance */}
        <h1 className="animate-hero-2 font-script text-fluid-hero text-white leading-[1.1] [text-shadow:0_2px_20px_rgba(74,122,150,.4)]">
          Rocky<br />
          {/* Gold & glows after hero loads */}
          <span className="animate-gold-glow">&amp;</span><br />
          Rachel
        </h1>

        {/* Divider draws from center outward */}
        <div className="animate-hero-3 origin-center w-[60px] h-px bg-gradient-to-r from-dusty-light via-gold to-dusty-light mx-auto my-6" />

        <p className="animate-hero-4 text-[0.8rem] tracking-[0.25em] uppercase text-white/75">
          Declaros &nbsp;·&nbsp; Ramirez
        </p>
        <p className="animate-hero-5 mt-2 text-[0.7rem] tracking-[0.3em] uppercase text-white/50">
          request the honour of your presence
        </p>
      </div>

      {/* Scroll hint — gentle float instead of hard bounce */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="flex flex-col items-center gap-1 text-white/60 text-[0.65rem] tracking-[0.2em] uppercase animate-float">
          <svg className="w-[18px] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          scroll
        </div>
      </div>
    </section>
  );
}
