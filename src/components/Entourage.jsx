import Reveal from './Reveal.jsx';

function Divider({ label }) {
  return (
    <Reveal className="flex items-center gap-3 my-10">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-dusty-light to-transparent" />
      <span className="text-gold text-[0.8rem] whitespace-nowrap">✦ &nbsp; {label} &nbsp; ✦</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-dusty-light to-transparent" />
    </Reveal>
  );
}

function Group({ title, subtitle, children }) {
  return (
    <div className="bg-dusty-pale border border-dusty-light border-t-[3px] border-t-dusty rounded-xl p-7 text-center">
      {title && <h3 className="font-serif text-[1.2rem] font-light italic text-dusty-dark mb-4 tracking-[0.04em]">{title}</h3>}
      {subtitle && <p className="text-[0.62rem] tracking-[0.22em] uppercase text-gold mb-2">{subtitle}</p>}
      {children}
    </div>
  );
}

function NameList({ names }) {
  return (
    <ul className="list-none p-0 m-0">
      {names.map((n, i) => (
        <li key={i} className={`text-[0.8rem] text-muted py-1.5 border-b border-dusty-light last:border-b-0 tracking-[0.03em] ${n.bold ? 'font-medium !text-dark' : ''}`}>
          {n.name || n}
          {n.role && <span className="block text-[0.6rem] text-gold tracking-[0.14em] uppercase mt-0.5">{n.role}</span>}
        </li>
      ))}
    </ul>
  );
}

function ChildRole({ label, name }) {
  return (
    <div className="mb-3 pb-3 border-b border-dusty-light last:mb-0 last:pb-0 last:border-b-0">
      <span className="block text-[0.6rem] tracking-[0.18em] uppercase text-gold mb-0.5">{label}</span>
      <span className="text-[0.8rem] text-muted leading-[1.75] whitespace-pre-line">{name}</span>
    </div>
  );
}

export default function Entourage() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[860px] mx-auto">
        <Reveal className="from-left"><p className="text-[0.7rem] tracking-[0.35em] uppercase text-dusty mb-3 text-center">The Entourage</p></Reveal>
        <Reveal><h2 className="font-serif text-fluid-title font-light leading-[1.2] mb-4 text-dusty-dark text-center">Our Wedding Party</h2></Reveal>
        <Reveal><div className="w-10 h-0.5 bg-gradient-to-r from-dusty-light to-gold rounded mx-auto mb-10" /></Reveal>

        <Reveal group className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <Group title="Groom's Parents">
            <NameList names={['Rolly Declaros', 'Annaliza Declaros']} />
          </Group>
          <Group title="Bride's Parent">
            <NameList names={['Myrna Ramirez']} />
          </Group>
        </Reveal>

        <Divider label="Principal Sponsors" />
        <Reveal><p className="font-script text-fluid-ent text-dusty-dark text-center mb-5 leading-[1.2]">Ninang &amp; Ninong</p></Reveal>
        <Reveal group className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <Group subtitle="Ninang">
            <NameList names={['Tita Basing','Tita Ritchell','Tita Nida','Maring Francisco','Tita Rose Talamillo','Sister Doring','Ate Ayra',"Ma'am Emz"]} />
          </Group>
          <Group subtitle="Ninong">
            <NameList names={['Tito Jimmy','Tito Jun-Jun','Tito Boyong','Bugoy Francisco','Bro. Rod','Sir Melvin']} />
          </Group>
        </Reveal>

        <Divider label="Bridal Party" />
        <Reveal group className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <Group title="Groom's Men">
            <NameList names={[
              { name: 'Dave Marbaja', bold: true, role: 'Best Man' },
              'Kayron Formales','Paul Dabalmat','Russel Biturin','Echo Rosales',
              'Rain Declaros','Raquim Declaros','Kenneth Ortilano','Michael Ramirez'
            ]} />
          </Group>
          <Group title="Bridesmaids">
            <NameList names={[
              'Mariella Amistoso','Chris Ramirez','Melissa Ramirez','Roda Joy Declaros',
              'Ludelyn Sugbo','Mhai Barlao','Renalyn Hindap','Kim Lagria','Erika Mausig'
            ]} />
          </Group>
        </Reveal>

        <Divider label="Little Ones" />
        <Reveal group className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Group title="Girls">
            <ChildRole label="Little Bride" name="Christine Sanidad" />
            <ChildRole label="Here Comes the Bride" name="Rhianna Declaros" />
            <ChildRole label="Flower Girls" name={"Chloe Regala\nKianna Sugbo\nErin Ignacio"} />
          </Group>
          <Group title="Boys">
            <ChildRole label="Bible Bearer" name="Red Sanidad" />
            <ChildRole label="Little Groom" name="Mico Demos" />
            <ChildRole label="Here Comes the Groom" name="Austin Esguerra" />
            <ChildRole label="Ring Bearer" name="Clint Gamol" />
          </Group>
        </Reveal>
      </div>
    </section>
  );
}
