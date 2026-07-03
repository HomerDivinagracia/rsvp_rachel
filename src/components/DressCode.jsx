import Reveal from './Reveal.jsx';

const menPhotos = [
  '/outfit_men_1.jpg',
  '/outfit_men_2.jpg',
  '/outfit_men_3.jpg',
  '/outfit_men_4.jpg',
  '/outfit_men_5.jpg',
];

const ladiesPhotos = [
  '/outfit_ladies_1.jpg',
  '/outfit_ladies_2.jpg',
  '/outfit_ladies_3.jpg',
  '/outfit_ladies_4.jpg',
  '/outfit_ladies_5.jpg',
  '/outfit_ladies_6.jpg',
];

function Swatch({ color, label, border }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span
        className="w-9 h-9 rounded-md block shadow-[0_2px_8px_rgba(0,0,0,.3)]"
        style={{ background: color, border: border ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
      />
      <span className="text-[0.48rem] tracking-[0.14em] uppercase text-white/40">{label}</span>
    </div>
  );
}

function OutfitStrip({ photos }) {
  const doubled = [...photos, ...photos];
  return (
    <div className="gallery-strip-wrap my-6">
      <div className="outfit-strip-track">
        {doubled.map((src, i) => (
          <img key={i} src={src} alt={`Outfit idea ${(i % photos.length) + 1}`} draggable={false} />
        ))}
      </div>
    </div>
  );
}

function GroupDivider({ label }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex-1 h-px bg-white/10" />
      <p className="text-[0.62rem] tracking-[0.38em] uppercase text-white/50">{label}</p>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

export default function DressCode() {
  return (
    <section style={{ background: '#1b2b3a' }} className="py-16 overflow-hidden">

      {/* Header */}
      <div className="px-6 max-w-[860px] mx-auto">
        <Reveal className="from-left">
          <p className="text-[0.7rem] tracking-[0.35em] uppercase text-white/35 mb-3 text-center">Finer Details</p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-fluid-title font-light text-white leading-[1.2] mb-4 text-center">Dress Code</h2>
        </Reveal>
        <Reveal>
          <div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-8" />
        </Reveal>
        <Reveal>
          <p className="font-serif italic text-white/55 text-center text-[1rem] max-w-[540px] mx-auto leading-[1.95] mb-14">
            We kindly encourage all guests to wear dusty blue or beige attire as part of our wedding color palette.
          </p>
        </Reveal>
      </div>

      {/* ── Gentlemen ── */}
      <div className="px-6 max-w-[860px] mx-auto">
        <Reveal>
          <GroupDivider label="Gentlemen" />

          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            {[
              { color: '#f2ebe2', label: 'Ivory',       border: true },
              { color: '#1a2530', label: 'Black',       border: true },
              { color: '#7B9DB4', label: 'Dusty Blue' },
              { color: '#b8d0dc', label: 'Powder Blue' },
              { color: '#e8d5b7', label: 'Beige' },
            ].map(s => <Swatch key={s.label} {...s} />)}
          </div>

          <p className="text-center text-[0.75rem] text-white/45 tracking-[0.08em] mb-1">
            Ninong — Barong &amp; Black Pants
          </p>
          <p className="text-center text-[0.72rem] text-white/35 tracking-[0.06em] mb-4">
            Guests — Dusty Blue · Powder Blue · Beige
          </p>

          <p className="text-center text-[0.56rem] tracking-[0.3em] uppercase text-gold/60">
            ✦ &nbsp; Outfit Ideas &nbsp; ✦
          </p>
        </Reveal>
      </div>

      <OutfitStrip photos={menPhotos} />

      {/* ── Ladies ── */}
      <div className="px-6 max-w-[860px] mx-auto mt-10">
        <Reveal>
          <GroupDivider label="Ladies" />

          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            {[
              { color: '#7B9DB4', label: 'Dusty Blue' },
              { color: '#b8d0dc', label: 'Powder Blue' },
              { color: '#e8d5b7', label: 'Beige' },
              { color: '#c9a96e', label: 'Gold' },
            ].map(s => <Swatch key={s.label} {...s} />)}
          </div>

          <p className="text-center text-[0.75rem] text-white/45 tracking-[0.08em] mb-1">
            Ninang — Beige or Gold · Formal Long Dress
          </p>
          <p className="text-center text-[0.72rem] text-white/35 tracking-[0.06em] mb-2">
            Guests — Dusty Blue · Powder Blue · Beige
          </p>
          <p className="text-center text-[0.7rem] font-medium text-[#e57a65] tracking-[0.05em] mb-4">
            ✕ &nbsp; Strictly no white dress please
          </p>

          <p className="text-center text-[0.56rem] tracking-[0.3em] uppercase text-gold/60">
            ✦ &nbsp; Outfit Ideas &nbsp; ✦
          </p>
        </Reveal>
      </div>

      <OutfitStrip photos={ladiesPhotos} />

    </section>
  );
}
