import Reveal from './Reveal.jsx';

const items = [
  { title: 'Pre-Program',           sub: 'Trivia games while waiting · Grazing table · Write your messages on the envelope' },
  { title: 'Entrance of Parents' },
  { title: 'Entrance of Sponsors' },
  { title: 'Entrance of the Couple' },
  { title: 'Prayer' },
  { title: 'Opening Remarks',       sub: 'Host introduction · Official hashtag announcement' },
  { title: 'Message of the Couple' },
  { title: 'Flash Mob' },
  { title: 'Game',                  sub: 'Get to know the couple' },
  { title: 'Cake Cutting' },
  { title: 'Messages from Parents' },
  { title: 'Short Messages from Sponsors' },
  { title: 'Special Dances',        sub: 'Father & Daughter · Mother & Son · Wedding Dance' },
  { title: 'Early Dinner / Lunch' },
  { title: 'Wine Toast' },
  { title: 'Prosperity Dance' },
  { title: 'Garter Retrieval' },
  { title: 'Garter Toss' },
  { title: 'Bouquet Toss' },
  { title: 'Opening of Gifts' },
  { title: 'Closing Remarks' },
];

export default function Program() {
  return (
    <section className="bg-dusty-pale py-16 px-6">
      <div className="max-w-[720px] mx-auto">

        {/* Header */}
        <Reveal className="from-left">
          <p className="text-[0.7rem] tracking-[0.35em] uppercase text-dusty mb-3 text-center">Reception Flow</p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-fluid-title font-light leading-[1.2] mb-4 text-dusty-dark text-center">Program</h2>
        </Reveal>
        <Reveal>
          <div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-14" />
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-dusty-light via-gold/40 to-dusty-light" />

          <div className="flex flex-col gap-0">
            {items.map((item, i) => (
              <Reveal key={i} className="flex gap-5 pb-7 last:pb-0">
                {/* Step dot */}
                <div className="flex flex-col items-center shrink-0 z-10">
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[0.6rem] font-medium tracking-wide shrink-0"
                    style={{
                      background: i === 0 || i === items.length - 1
                        ? 'linear-gradient(135deg, #c9a96e 0%, #b8924f 100%)'
                        : 'linear-gradient(135deg, #7b9db4 0%, #4a7a96 100%)',
                      color: 'white',
                      boxShadow: '0 2px 10px rgba(74,122,150,.25)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1.5 pb-2">
                  <p className="font-serif text-[1.05rem] italic text-dusty-dark leading-snug">{item.title}</p>
                  {item.sub && (
                    <p className="text-[0.72rem] text-muted leading-[1.75] mt-0.5">{item.sub}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
