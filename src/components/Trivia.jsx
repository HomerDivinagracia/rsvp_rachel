import { useState } from 'react';
import Reveal from './Reveal.jsx';

const trivia = [
  { q: 'Date of Anniversary',                   a: '' },
  { q: 'Kailan unang nagkita?',                  a: '' },
  { q: 'Saan unang nagkita?',                    a: '' },
  { q: 'Favorite lugar na pinupuntahan',         a: '' },
  { q: 'Favorite food/ulam ni Bride',            a: '' },
  { q: 'Favorite food/ulam ni Groom',            a: '' },
  { q: 'Sino ang mas magaling magluto?',         a: '' },
  { q: 'Sino ang mas malambing?',                a: '' },
  { q: 'Unang regalo ni Bride kay Groom',        a: '' },
  { q: 'Unang regalo ni Groom kay Bride',        a: '' },
  { q: 'Hobby ni Bride',                         a: '' },
  { q: 'Hobby ni Groom',                         a: '' },
  { q: 'Memorable date / event ng couple',       a: '' },
  { q: 'Unang out of town, saan?',               a: '' },
  { q: 'Saan mag-honeymoon?',                    a: '' },
  { q: 'Ilan ang gustong anak?',                 a: '' },
  { q: 'Work / Company ni Bride at Groom',       a: '' },
  { q: 'School / Course ni Bride at Groom',      a: '' },
];

function TriviaCard({ num, q, a }) {
  const [revealed, setRevealed] = useState(false);
  const hasAnswer = a && a.trim() !== '';

  return (
    <button
      onClick={() => hasAnswer && setRevealed(r => !r)}
      className={`text-left w-full bg-white border border-dusty-light border-t-[3px] rounded-xl p-5 transition-all duration-300 group
        ${hasAnswer ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(74,122,150,.15)]' : 'cursor-default'}
        ${revealed ? 'border-t-gold shadow-[0_4px_20px_rgba(201,169,110,.12)]' : 'border-t-dusty'}`}
    >
      {/* Number badge */}
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-[0.55rem] font-medium mb-3"
        style={{ background: 'linear-gradient(135deg, #7b9db4 0%, #4a7a96 100%)' }}>
        {String(num).padStart(2, '0')}
      </span>

      {/* Question */}
      <p className="font-serif italic text-[0.95rem] text-dusty-dark leading-snug mb-3">{q}</p>

      {/* Divider */}
      <div className="w-8 h-px bg-gradient-to-r from-dusty-light to-gold mb-3" />

      {/* Answer */}
      {hasAnswer ? (
        revealed ? (
          <p className="text-[0.8rem] text-dusty-dark font-medium tracking-[0.02em] animate-[fadeIn_.25s_ease]">{a}</p>
        ) : (
          <p className="text-[0.65rem] tracking-[0.18em] uppercase text-dusty/60 flex items-center gap-1.5">
            <span>Tap to reveal</span>
            <span className="text-gold">✦</span>
          </p>
        )
      ) : (
        <p className="text-[0.65rem] tracking-[0.12em] text-dusty-light italic">To be revealed at the reception</p>
      )}
    </button>
  );
}

export default function Trivia() {
  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-[860px] mx-auto">

        <Reveal className="from-left">
          <p className="text-[0.7rem] tracking-[0.35em] uppercase text-dusty mb-3 text-center">Get to Know Us</p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-fluid-title font-light leading-[1.2] mb-4 text-dusty-dark text-center">Trivia</h2>
        </Reveal>
        <Reveal>
          <div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-4" />
        </Reveal>
        <Reveal>
          <p className="text-center text-[0.72rem] text-muted leading-[1.8] max-w-[480px] mx-auto mb-12">
            How well do you know Rocky &amp; Rachel? Tap each card at the reception to reveal the answer!
          </p>
        </Reveal>

        <Reveal group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trivia.map((item, i) => (
            <TriviaCard key={i} num={i + 1} q={item.q} a={item.a} />
          ))}
        </Reveal>

      </div>
    </section>
  );
}
