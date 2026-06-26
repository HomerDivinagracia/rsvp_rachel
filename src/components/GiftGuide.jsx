import Reveal from './Reveal.jsx';

const gifts = [
  {
    title: 'Monetary Gift',
    text: 'Cash gifts are warmly welcomed and will help us build our life together.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="2"/>
        <path d="M2 10l10 6 10-6"/>
      </svg>
    ),
  },
  {
    title: 'Home & Living',
    text: 'Anything that will make our new home warm, cozy, and filled with love.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    title: 'Your Presence',
    text: 'Your love, blessings, and being there with us on our special day mean everything.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
          fill="rgba(255,255,255,.25)" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function GiftGuide() {
  return (
    <section className="bg-dusty-pale py-14 px-6">
      <div className="max-w-[720px] mx-auto">
        <Reveal className="from-left"><p className="text-[0.7rem] tracking-[0.35em] uppercase text-dusty mb-3 text-center">Gift Guide</p></Reveal>
        <Reveal><h2 className="font-serif text-fluid-title font-light leading-[1.2] mb-4 text-dusty-dark text-center">A Little Note</h2></Reveal>
        <Reveal><div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-8" /></Reveal>

        <Reveal>
          <p className="font-serif text-[1.08rem] italic text-dusty-dark text-center max-w-[520px] mx-auto leading-[1.95] mb-12">
            Your presence at our wedding is the greatest gift we could ever ask for. But if you wish to give something to help us begin our new chapter together, we would be truly grateful.
          </p>
        </Reveal>

        <Reveal group className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {gifts.map((g) => (
            <div key={g.title}
              className="bg-white border border-dusty-light border-t-[3px] border-t-dusty rounded-xl p-8 text-center transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(123,157,180,.18)]">
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_14px_rgba(74,122,150,.3)]"
                style={{ background: 'linear-gradient(135deg, #7b9db4 0%, #4a7a96 100%)' }}>
                {g.icon}
              </div>
              <p className="font-serif text-[1.12rem] italic text-dusty-dark mb-2">{g.title}</p>
              <p className="text-[0.78rem] text-muted leading-[1.85]">{g.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
