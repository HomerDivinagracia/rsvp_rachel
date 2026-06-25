import { useState, useEffect, useCallback } from 'react';
import Reveal from './Reveal.jsx';

const photos = [
  '/other_picture/untitled (151 of 490).jpg',
  '/other_picture/untitled (173 of 490).jpg',
  '/other_picture/untitled (52 of 490).jpg',
  '/other_picture/untitled (270 of 490).jpg',
  '/other_picture/untitled (311 of 490).jpg',
  '/other_picture/untitled (387 of 490).jpg',
  '/other_picture/untitled (413 of 490).jpg',
  '/other_picture/untitled (233 of 490).jpg',
  '/other_picture/untitled (466 of 490).jpg',
  '/other_picture/untitled (470 of 490).jpg',
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const close = () => { setOpen(false); document.body.style.overflow = ''; };
  const show = (i) => { setIdx(i); setOpen(true); document.body.style.overflow = 'hidden'; };
  const shift = useCallback((dir) => setIdx(i => (i + dir + photos.length) % photos.length), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') shift(1);
      if (e.key === 'ArrowLeft')  shift(-1);
      if (e.key === 'Escape')     close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, shift]);

  return (
    <>
      <section className="bg-dusty-pale py-24 px-6">
        <div className="max-w-[960px] mx-auto">
          <Reveal><p className="text-[0.7rem] tracking-[0.35em] uppercase text-dusty mb-3 text-center">Our Story</p></Reveal>
          <Reveal><h2 className="font-serif text-fluid-title font-light leading-[1.2] mb-4 text-dusty-dark text-center">A Glimpse of Us</h2></Reveal>
          <Reveal><div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-8" /></Reveal>

          <Reveal group className="gallery-grid mt-8">
            {photos.map((src, i) => (
              <img key={i} src={src} alt={`Rocky and Rachel photo ${i + 1}`} onClick={() => show(i)} />
            ))}
          </Reveal>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/[.92] flex items-center justify-center"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <button onClick={close} aria-label="Close"
            className="fixed top-5 right-6 text-white text-[2rem] cursor-pointer opacity-70 hover:opacity-100 bg-transparent border-none leading-none">
            &#x2715;
          </button>
          <button onClick={() => shift(-1)} aria-label="Previous"
            className="fixed left-2 top-1/2 -translate-y-1/2 text-white text-[2.5rem] cursor-pointer opacity-60 hover:opacity-100 bg-transparent border-none px-4 py-4">
            &#8249;
          </button>
          <img src={photos[idx]} alt="Gallery photo"
            className="max-w-[90vw] max-h-[88vh] object-contain rounded shadow-[0_8px_60px_rgba(0,0,0,.6)]" />
          <button onClick={() => shift(1)} aria-label="Next"
            className="fixed right-2 top-1/2 -translate-y-1/2 text-white text-[2.5rem] cursor-pointer opacity-60 hover:opacity-100 bg-transparent border-none px-4 py-4">
            &#8250;
          </button>
          <span className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-[0.7rem] tracking-[0.2em]">
            {idx + 1} / {photos.length}
          </span>
        </div>
      )}
    </>
  );
}
