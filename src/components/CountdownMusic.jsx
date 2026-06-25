import { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal.jsx';

function fmt(s) {
  if (!s || isNaN(s) || !isFinite(s)) return '0:00';
  return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
}

function TimerBlock({ value, label, gold = false }) {
  return (
    <div className={`flex flex-col items-center bg-[#f4f9fc] border border-[#d0e4ee] rounded-[10px] px-4 py-3 flex-1 min-w-[68px] max-w-[88px] ${gold ? 'border-t-[3px] border-t-gold' : 'border-t-[3px] border-t-dusty'}`}>
      <span className={`font-serif text-[clamp(1.8rem,6vw,2.6rem)] leading-none ${gold ? 'text-gold' : 'text-dusty-dark'}`}>
        {value}
      </span>
      <label className="text-[0.46rem] tracking-[0.22em] uppercase text-dusty mt-1">{label}</label>
    </div>
  );
}

export default function CountdownMusic() {
  const [time, setTime] = useState({ d: '--', h: '--', m: '--', s: '--' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [curTime, setCurTime] = useState('0:00');
  const [dur, setDur] = useState('0:00');
  const audioRef = useRef(null);

  useEffect(() => {
    const wedding = new Date(2026, 11, 8, 15, 0, 0);
    const tick = () => {
      const diff = wedding - new Date();
      if (diff <= 0) { setTime({ d: '00', h: '00', m: '00', s: '00' }); return; }
      setTime({
        d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (!a) return;
    setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    setCurTime(fmt(a.currentTime));
  };

  const onLoaded = () => setDur(fmt(audioRef.current?.duration));

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play(); setIsPlaying(true); } else { a.pause(); setIsPlaying(false); }
  };
  const rewind  = () => { if (audioRef.current) audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10); };
  const forward = () => { const a = audioRef.current; if (a) a.currentTime = Math.min(a.duration || 0, a.currentTime + 10); };
  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const a = audioRef.current;
    if (a) a.currentTime = ((e.clientX - rect.left) / rect.width) * (a.duration || 0);
  };

  return (
    <section className="relative flex items-center justify-center py-20 px-6"
      style={{ background: 'linear-gradient(150deg, #dcedf4 0%, #f5ede0 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(123,157,180,.18) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />

      <audio ref={audioRef} loop preload="auto" onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoaded}
        onEnded={() => { if (audioRef.current) { audioRef.current.currentTime = 0; audioRef.current.play(); } }}>
        <source src="/music/canon_in_d.mp3" type="audio/mpeg" />
      </audio>

      <Reveal className="w-full max-w-full rounded-2xl overflow-hidden relative z-10 shadow-[0_2px_6px_rgba(74,122,150,.08),0_10px_36px_rgba(74,122,150,.18),0_32px_72px_rgba(74,122,150,.08)]">

        {/* Blue header */}
        <div className="relative text-center pt-10 px-8 pb-0"
          style={{ background: 'linear-gradient(135deg, #7B9DB4 0%, #4a7a96 100%)' }}>
          {['tl','tr','bl','br'].map(pos => (
            <span key={pos} className={`absolute text-[1.9rem] text-white/[0.28] leading-none pointer-events-none select-none
              ${pos === 'tl' ? 'top-2 left-3' : pos === 'tr' ? 'top-2 right-3 scale-x-[-1]' : pos === 'bl' ? 'bottom-2 left-3 scale-y-[-1]' : 'bottom-2 right-3 scale-[-1]'}`}>
              ❧
            </span>
          ))}
          <div className="font-script text-fluid-mono text-white leading-none mb-1 [text-shadow:0_2px_14px_rgba(0,0,0,.18)]">
            R<span className="text-gold">&amp;</span>R
          </div>
          <p className="text-[0.63rem] tracking-[0.38em] uppercase text-white/[0.82] mb-0.5">Rocky &amp; Rachel</p>
          <p className="text-[0.58rem] tracking-[0.28em] text-white/50">12 · 08 · 2026</p>
          <div className="block leading-[0] mt-6">
            <svg viewBox="0 0 1200 48" preserveAspectRatio="none" className="w-full h-12 block">
              <path d="M0,24 C200,48 400,0 600,24 C800,48 1000,0 1200,24 L1200,48 L0,48 Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* White countdown body */}
        <div className="bg-white px-8 py-9 text-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-dusty-light to-transparent" />
            <span className="text-gold text-[0.8rem]">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-dusty-light to-transparent" />
          </div>
          <h2 className="font-script text-fluid-cms text-dusty-dark leading-[1.1] mb-1">The countdown</h2>
          <p className="text-[0.72rem] text-dusty tracking-[0.1em] mb-7">to forever has begun...</p>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            <TimerBlock value={time.d} label="Days" />
            <span className="font-serif text-[2rem] text-dusty-light self-center pb-5 shrink-0">:</span>
            <TimerBlock value={time.h} label="Hours" />
            <span className="font-serif text-[2rem] text-dusty-light self-center pb-5 shrink-0">:</span>
            <TimerBlock value={time.m} label="Minutes" />
            <span className="font-serif text-[2rem] text-dusty-light self-center pb-5 shrink-0">:</span>
            <TimerBlock value={time.s} label="Seconds" gold />
          </div>
        </div>

        {/* Pale blue music player */}
        <div className="bg-[#ebf3f7] border-t border-[#c5dce8] px-8 pt-6 pb-8 text-center">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[0.62rem] text-dusty whitespace-nowrap min-w-[30px]">{curTime}</span>
            <div className="flex-1 h-1 bg-[#c5dce8] rounded cursor-pointer relative" onClick={seek}>
              <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-dusty to-dusty-dark rounded" style={{ width: `${progress}%` }} />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-gold border-2 border-white rounded-full shadow-[0_1px_6px_rgba(0,0,0,.2)] transition-[left_.1s_linear]"
                style={{ left: `${progress}%` }} />
            </div>
            <span className="text-[0.62rem] text-dusty whitespace-nowrap min-w-[30px]">{dur}</span>
          </div>

          <div className="flex items-center justify-center gap-8 mb-4">
            <button onClick={rewind} aria-label="Rewind 10s"
              className="bg-transparent border-none text-[1.3rem] text-dusty cursor-pointer hover:text-dusty-dark hover:scale-110 transition-all leading-none">⏮</button>
            <button onClick={toggle} aria-label={isPlaying ? 'Pause' : 'Play'}
              className={`w-[58px] h-[58px] rounded-full border-none cursor-pointer flex items-center justify-center shadow-[0_4px_20px_rgba(201,169,110,.5)] transition-transform hover:scale-[1.08] ${isPlaying ? 'animate-cms-pulse' : ''}`}
              style={{ background: 'linear-gradient(135deg, #c9a96e 0%, #b8924f 100%)' }}>
              {isPlaying
                ? <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                : <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              }
            </button>
            <button onClick={forward} aria-label="Forward 10s"
              className="bg-transparent border-none text-[1.3rem] text-dusty cursor-pointer hover:text-dusty-dark hover:scale-110 transition-all leading-none">⏭</button>
          </div>

          <p className="font-script text-[1.75rem] text-dusty-dark leading-[1.3] mt-1">Click to play our music</p>
          <p className="text-[0.58rem] tracking-[0.18em] uppercase text-[#a0bfcc] mt-1">♪ Canon in D · Pachelbel</p>
        </div>

      </Reveal>
    </section>
  );
}
