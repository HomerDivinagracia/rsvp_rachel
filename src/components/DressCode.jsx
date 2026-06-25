import Reveal from './Reveal.jsx';

function Swatch({ color, title }) {
  return (
    <span className="w-5 h-5 rounded-full border-2 border-white shadow-[0_1px_5px_rgba(0,0,0,.18)] inline-block"
      style={{ background: color }} title={title} />
  );
}

const cards = [
  {
    title: 'Ninong', role: 'Principal Sponsor · Gentlemen',
    detail: 'Barong\nBlack Pants',
    swatches: [{ color: '#f5ede0', title: 'Barong / Ivory' }, { color: '#1a2530', title: 'Black' }],
  },
  {
    title: 'Ninang', role: 'Principal Sponsor · Ladies',
    detail: 'Beige or Gold\nFormal / Long Dress',
    swatches: [{ color: '#e8d5b7', title: 'Beige' }, { color: '#c9a96e', title: 'Gold' }],
  },
  {
    title: 'Gentlemen', role: 'Wedding Guests',
    detail: 'Dusty Blue · Powder Blue · Beige',
    swatches: [{ color: '#7B9DB4', title: 'Dusty Blue' }, { color: '#b8d0dc', title: 'Powder Blue' }, { color: '#e8d5b7', title: 'Beige' }],
  },
  {
    title: 'Ladies', role: 'Wedding Guests',
    detail: 'Dusty Blue · Powder Blue · Beige',
    swatches: [{ color: '#7B9DB4', title: 'Dusty Blue' }, { color: '#b8d0dc', title: 'Powder Blue' }, { color: '#e8d5b7', title: 'Beige' }],
    warn: '✕ Strictly no white dress please',
  },
];

export default function DressCode() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-[720px] mx-auto">
        <Reveal><p className="text-[0.7rem] tracking-[0.35em] uppercase text-dusty mb-3 text-center">Finer Details</p></Reveal>
        <Reveal><h2 className="font-serif text-fluid-title font-light leading-[1.2] mb-4 text-dusty-dark text-center">Dress Code</h2></Reveal>
        <Reveal><div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-10" /></Reveal>

        <Reveal className="relative rounded-2xl border border-dusty-light overflow-hidden p-10 pb-8 mb-10 text-center shadow-[0_4px_24px_rgba(74,122,150,.08)]"
          style={{ background: 'linear-gradient(135deg, #e5eff5 0%, #f5ede0 100%)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(123,157,180,.14) 1.2px, transparent 1.2px)', backgroundSize: '22px 22px' }} />
          <div className="absolute text-[5rem] text-[rgba(184,208,220,.18)] bottom-2 right-5 leading-none pointer-events-none select-none">✿</div>

          <div className="relative z-10 flex justify-center items-end gap-16 mb-7">
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 100 170" className="w-[110px] h-auto drop-shadow-[0_6px_18px_rgba(74,122,150,.18)]" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="21" rx="12" ry="14" fill="#ddbf98"/>
                <path d="M38 15 Q50 7 62 15 L62 9 Q50 3 38 9 Z" fill="#5c3d2e"/>
                <rect x="45" y="33" width="10" height="9" rx="1" fill="#ddbf98"/>
                <path d="M38 41 Q50 37 62 41 L66 140 L34 140 Z" fill="#f2ebe2"/>
                <polygon points="47,41 53,41 51.5,57 50,62 48.5,57" fill="#7B9DB4"/>
                <polygon points="48.8,62 50,108 51.2,62 50,60" fill="#4a7a96"/>
                <path d="M10 57 L36 41 L40 70 L40 140 L10 140 Z" fill="#1a2530"/>
                <path d="M90 57 L64 41 L60 70 L60 140 L90 140 Z" fill="#1a2530"/>
                <path d="M36 41 L46 64 L40 70" fill="#243242"/>
                <path d="M64 41 L54 64 L60 70" fill="#243242"/>
                <path d="M10 57 Q3 46 9 37 Q21 29 36 41" fill="#1a2530"/>
                <path d="M90 57 Q97 46 91 37 Q79 29 64 41" fill="#1a2530"/>
                <path d="M16 72 L27 70 L26 81 L15 83 Z" fill="#7B9DB4" opacity=".6"/>
                <circle cx="50" cy="85" r="1.8" fill="#c9a96e"/>
                <circle cx="50" cy="99" r="1.8" fill="#c9a96e"/>
                <circle cx="50" cy="113" r="1.8" fill="#c9a96e"/>
              </svg>
              <span className="text-[0.6rem] tracking-[0.22em] uppercase text-muted">Gentlemen</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 100 190" className="w-[110px] h-auto drop-shadow-[0_6px_18px_rgba(74,122,150,.18)]" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="18" rx="12" ry="14" fill="#ddbf98"/>
                <ellipse cx="50" cy="7" rx="10" ry="6" fill="#5c3d2e"/>
                <path d="M40 12 Q50 4 60 12" fill="#5c3d2e"/>
                <rect x="45" y="30" width="10" height="9" rx="1" fill="#ddbf98"/>
                <path d="M26 43 Q16 54 16 74 Q20 78 26 74 Q28 58 36 49" fill="#ddbf98"/>
                <path d="M74 43 Q84 54 84 74 Q80 78 74 74 Q72 58 64 49" fill="#ddbf98"/>
                <path d="M26 43 Q36 33 50 38 Q64 33 74 43 L70 88 L30 88 Z" fill="#c9a96e"/>
                <path d="M41 41 L50 56 L59 41" fill="none" stroke="rgba(140,95,40,.35)" strokeWidth="1.3"/>
                <circle cx="50" cy="45" r="3.8" fill="rgba(255,255,255,.65)" stroke="#d4aa5a" strokeWidth=".7"/>
                <rect x="28" y="86" width="44" height="7" rx="3" fill="#2b3a4a"/>
                <rect x="46" y="87" width="8" height="5" rx="1" fill="#c9a96e" opacity=".75"/>
                <path d="M28 93 L6 186 L94 186 L72 93 Z" fill="#c9a96e"/>
                <path d="M28 93 L6 186 L12 186 L32 93 Z" fill="rgba(255,255,255,.12)"/>
                <path d="M50 93 L43 186 L57 186 L50 93 Z" fill="rgba(0,0,0,.05)"/>
              </svg>
              <span className="text-[0.6rem] tracking-[0.22em] uppercase text-muted">Ladies</span>
            </div>
          </div>

          <p className="relative z-10 font-serif text-[1.02rem] italic text-dusty-dark max-w-[480px] mx-auto leading-[1.9] pt-5 border-t border-[rgba(184,208,220,.5)]">
            We kindly encourage all guests to wear dusty blue or beige attire as part of our wedding color palette.
          </p>
        </Reveal>

        <Reveal group className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="bg-white border border-dusty-light border-t-[3px] border-t-dusty rounded-xl p-7 text-center">
              <p className="font-serif text-[1.2rem] italic text-dusty-dark mb-1">{c.title}</p>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-gold mb-3">{c.role}</p>
              <p className="text-[0.8rem] text-muted leading-[1.9] whitespace-pre-line">{c.detail}</p>
              <div className="flex justify-center gap-2 mt-3 items-center flex-wrap">
                {c.swatches.map((s) => <Swatch key={s.title} {...s} />)}
              </div>
              {c.warn && <span className="block mt-3 text-[0.7rem] font-medium text-[#be5945] tracking-[0.05em]">{c.warn}</span>}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
