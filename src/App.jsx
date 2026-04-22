import { useState, useEffect } from 'react';
import Sidebar, { sectionIds } from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import Brand from './sections/Brand.jsx';
import Logo from './sections/Logo.jsx';
import Color from './sections/Color.jsx';
import Type from './sections/Type.jsx';
import Spacing from './sections/Spacing.jsx';
import Radius from './sections/Radius.jsx';
import Elevation from './sections/Elevation.jsx';
import Buttons from './sections/Buttons.jsx';
import Badges from './sections/Badges.jsx';
import Forms from './sections/Forms.jsx';
import Cards from './sections/Cards.jsx';
import Alerts from './sections/Alerts.jsx';
import Icons from './sections/Icons.jsx';
import Patterns from './sections/Patterns.jsx';
import Voice from './sections/Voice.jsx';
import DoDont from './sections/DoDont.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.js';

export default function App() {
  const activeId = useScrollSpy(sectionIds);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  return (
    <div className={`shell${navOpen ? ' nav-open' : ''}`}>
      <button
        type="button"
        className="nav-toggle"
        aria-label="Abrir navegación"
        aria-expanded={navOpen}
        onClick={() => setNavOpen(true)}
      >
        <span></span><span></span><span></span>
      </button>

      <Sidebar
        activeId={activeId}
        open={navOpen}
        onClose={() => setNavOpen(false)}
      />

      {navOpen && <div className="nav-scrim" onClick={() => setNavOpen(false)} />}

      <main>
        <Hero />
        <Brand />
        <Logo />
        <Color />
        <Type />
        <Spacing />
        <Radius />
        <Elevation />
        <Buttons />
        <Badges />
        <Forms />
        <Cards />
        <Alerts />
        <Icons />
        <Patterns />
        <Voice />
        <DoDont />
      </main>
    </div>
  );
}
