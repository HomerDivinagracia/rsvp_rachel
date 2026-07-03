import Hero from './components/Hero.jsx';
import CountdownMusic from './components/CountdownMusic.jsx';
import EventDetails from './components/EventDetails.jsx';
import Program from './components/Program.jsx';
import VenuePhoto from './components/VenuePhoto.jsx';
import Gallery from './components/Gallery.jsx';
import Trivia from './components/Trivia.jsx';
import Entourage from './components/Entourage.jsx';
import DressCode from './components/DressCode.jsx';
import GiftGuide from './components/GiftGuide.jsx';
import Footer from './components/Footer.jsx';

function Wave({ above, below, flip = false }) {
  const d = flip
    ? 'M0,32 C360,4 720,60 1080,32 C1260,18 1380,50 1440,40 L1440,60 L0,60 Z'
    : 'M0,32 C360,60 720,4 1080,32 C1260,46 1380,14 1440,24 L1440,60 L0,60 Z';
  return (
    <div style={{ background: above, lineHeight: 0, display: 'block', margin: 0, padding: 0 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: 60, display: 'block' }}>
        <path fill={below} d={d} />
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <CountdownMusic />
      <Wave above="#f5ede0" below="#ffffff" />
      <EventDetails />
      <Wave above="#ffffff" below="#ebf3f7" flip />
      <Program />
      <Wave above="#ebf3f7" below="#f5ede0" />
      <VenuePhoto />
      <Wave above="#f5ede0" below="#ebf3f7" flip />
      <Gallery />
      <Wave above="#ebf3f7" below="#f5ede0" />
      <Trivia />
      <Wave above="#f5ede0" below="#ffffff" flip />
      <Entourage />
      <Wave above="#ffffff" below="#1b2b3a" />
      <DressCode />
      <Wave above="#1b2b3a" below="#ebf3f7" />
      <GiftGuide />
      <Wave above="#ebf3f7" below="#2b3a4a" />
      <Footer />
    </>
  );
}
