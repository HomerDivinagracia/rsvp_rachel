import Reveal from './Reveal.jsx';

const cards = [
  {
    title: 'Holy Matrimony',
    body: 'Tuesday, December 8, 2026\n3:00 in the afternoon',
    icon: (
      <svg viewBox="0 0 28 28" className="w-[26px] h-[26px] stroke-white" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9"  cy="14" r="6" />
        <circle cx="19" cy="14" r="6" />
      </svg>
    ),
  },
  {
    title: 'Wedding Reception',
    body: 'December 8, 2026\n3:00 PM – 7:00 PM',
    icon: (
      <svg viewBox="0 0 28 28" className="w-[26px] h-[26px] stroke-white" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4 L5 12 Q5 16 9 17 L9 23" />
        <path d="M21 4 L23 12 Q23 16 19 17 L19 23" />
        <path d="M5 23 L13 23" />
        <path d="M15 23 L23 23" />
        <path strokeWidth="1.5" d="M8.5 7 L19.5 7" />
      </svg>
    ),
  },
  {
    title: 'Venue',
    body: 'Glendenning Hotel and Resort\nSan Jose, Occidental Mindoro',
    icon: (
      <svg viewBox="0 0 28 28" className="w-[26px] h-[26px]">
        <path fill="rgba(255,255,255,0.85)" stroke="none" d="M14 3 C9.58 3 6 6.58 6 11 C6 17.25 14 25 14 25 C14 25 22 17.25 22 11 C22 6.58 18.42 3 14 3 Z"/>
        <circle cx="14" cy="11" r="3.2" fill="rgba(74,122,150,0.6)" />
      </svg>
    ),
  },
  {
    title: 'Attire',
    body: 'Smart Casual\nor Formal Wear',
    icon: (
      <svg viewBox="0 0 28 28" className="w-[26px] h-[26px]">
        <path fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" d="M4 9 L12 14 L4 19 Z"/>
        <path fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" d="M24 9 L16 14 L24 19 Z"/>
        <rect x="12" y="12" width="4" height="4" rx="1" fill="rgba(255,255,255,0.85)" />
      </svg>
    ),
  },
];

export default function EventDetails() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <Reveal className="from-left"><p className="text-[0.7rem] tracking-[0.35em] uppercase text-dusty mb-3 text-center">The Celebration</p></Reveal>
        <Reveal><h2 className="font-serif text-fluid-title font-light leading-[1.2] mb-4 text-dusty-dark text-center">Event Details</h2></Reveal>
        <Reveal><div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-12" /></Reveal>

        <Reveal group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
          {cards.map((card) => (
            <div key={card.title}
              className="bg-dusty-pale border border-dusty-light border-t-[3px] border-t-dusty rounded-xl p-8 text-center transition-all duration-[250ms] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(123,157,180,.2)]">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_14px_rgba(74,122,150,.35)]"
                style={{ background: 'linear-gradient(135deg, #7b9db4 0%, #4a7a96 100%)' }}>
                {card.icon}
              </div>
              <div className="font-serif text-[1.15rem] italic text-dusty-dark mb-2">{card.title}</div>
              <p className="text-[0.78rem] text-muted leading-[1.85] whitespace-pre-line">{card.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
