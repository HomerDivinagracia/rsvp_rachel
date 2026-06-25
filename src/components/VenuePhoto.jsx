import Reveal from './Reveal.jsx';

export default function VenuePhoto() {
  return (
    <section className="bg-cream text-center pb-24 px-6">
      <div className="max-w-[720px] mx-auto">
        <Reveal className="from-left"><p className="text-[0.7rem] tracking-[0.35em] uppercase text-dusty mb-3">The Venue</p></Reveal>
        <Reveal><h2 className="font-serif text-fluid-title font-light leading-[1.2] mb-4 text-dusty-dark">Glendenning Hotel &amp; Resort</h2></Reveal>
        <Reveal><div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-8" /></Reveal>

        <Reveal className="relative max-w-[860px] mx-auto mb-8 rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(74,122,150,.18),0_2px_8px_rgba(0,0,0,.08)] group">
          <img
            src="/venue/glendenning.jpg"
            alt="Glendenning Hotel and Resort"
            className="w-full h-[420px] object-cover block transition-transform duration-[600ms] ease group-hover:scale-[1.03]"
            onError={(e) => { e.target.style.minHeight = '420px'; e.target.style.background = 'linear-gradient(135deg,#b5cad8 0%,#d6e4ec 50%,#c9d8e2 100%)'; e.target.removeAttribute('src'); }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,50,60,.55)] to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-[1.15rem] tracking-[0.08em] whitespace-nowrap [text-shadow:0_1px_6px_rgba(0,0,0,.4)] pointer-events-none">
            Glendenning Hotel &amp; Resort
            <span className="block text-[0.68rem] tracking-[0.22em] uppercase opacity-85 mt-0.5">San Jose, Occidental Mindoro</span>
          </div>
        </Reveal>

        <Reveal>
          <a href="https://www.google.com/maps/search/Glendenning+Hotel+and+Resort+San+Jose+Occidental+Mindoro"
            target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 px-9 py-3 border border-dusty text-dusty-dark text-[0.75rem] tracking-[0.2em] uppercase no-underline rounded transition-all duration-[250ms] hover:bg-dusty hover:text-white">
            <svg width="14" height="14" viewBox="0 0 28 28" fill="none">
              <path d="M14 3C9.58 3 6 6.58 6 11C6 17.25 14 25 14 25C14 25 22 17.25 22 11C22 6.58 18.42 3 14 3Z" fill="currentColor" opacity=".75"/>
              <circle cx="14" cy="11" r="3.2" fill="white"/>
            </svg>
            Open in Google Maps
          </a>
        </Reveal>
      </div>
    </section>
  );
}
