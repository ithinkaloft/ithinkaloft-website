import { useEffect, useState } from 'react';
import Container from '../common/Container';
import { ButtonLink } from '../common/Button';
import './HomeHero.css';
const slides = [
  { key: 'studio', label: 'The studio', image: '/assets/brand/web/home-hero-montage.webp', height: 530, alt: 'Montage of ithinkaloft game worlds and concepts', eyebrow: 'Independent Game Studio', title: <>Games built<br />with care.</>, description: 'Independent games focused on satisfying mechanics, distinctive worlds, and experiences worth returning to.', action: 'Explore our games', href: '#games' },
  { key: 'wreckshift', label: 'WRECKSHIFT', image: '/assets/games/wreckshift/web/breakyard.webp', height: 941, alt: 'The WRECKSHIFT hero car chased by police through the Breakyard at sunset', eyebrow: 'New game / WRECKSHIFT / Coming soon to Android', title: <>Outrun. Outsmart.<br /><span className="home-hero-amber">Outlast.</span></>, description: 'An arcade police chase where the yard fights back. Make the police wreck, chain the pileups and stay loose as long as you can.', action: 'Discover WRECKSHIFT', href: '/games/wreckshift' },
  { key: 'sorting-war', label: 'Sorting War', height: 500, image: '/assets/games/sorting-war/web/feature.webp', alt: 'Sorting War elemental heroes and glowing sorting tubes', eyebrow: 'Sorting War / Out now on Android', title: <>Every sort<br /><span className="home-hero-gold">strikes back.</span></>, description: 'Five elemental heroes. Forty campaign battles. A clever puzzle becomes your next powerful attack.', action: 'Discover Sorting War', href: '/games/sorting-war' },
];
export default function HomeHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  useEffect(() => {
    if (paused || interacting || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => { if (!document.hidden) setActive(i => (i + 1) % slides.length); }, 8000);
    return () => window.clearInterval(timer);
  }, [paused, interacting, active]);
  const slide = slides[active];
  return <section className={'home-hero home-hero-carousel slide-' + slide.key} aria-label="Studio and game highlights" aria-roledescription="carousel" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={e => {if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false);}}>
    <div className="home-hero-image-wrapper" aria-hidden="true">
      {slides.map((s,i) => <img key={s.image} src={s.image} alt="" className={'home-hero-image home-slide-image' + (active === i ? ' is-active' : '')} width={s.height === 941 ? 1672 : 1024} height={s.height} decoding="async" fetchPriority={i === 0 ? 'high' : 'auto'} />)}
    </div>
    <Container className="home-hero-layout"><div className="home-hero-content" role="group" aria-roledescription="slide" aria-label={(active + 1) + ' of ' + slides.length + ': ' + slide.label}>
      <span className="home-hero-eyebrow">{slide.eyebrow}</span>
      <h1 className="home-hero-title">{slide.title}</h1>
      <p className="home-hero-description">{slide.description}</p>
      <ButtonLink href={slide.href} variant="primary" size="large">{slide.action} <span aria-hidden="true">&#8594;</span></ButtonLink>
    </div></Container>
    <Container className="home-carousel-controls"><div className="home-slide-tabs" aria-label="Choose a slide">{slides.map((s,i) => <button key={s.image} className={i === active ? 'is-active' : ''} aria-pressed={i === active} onClick={() => setActive(i)}><span className="home-slide-index">0{i + 1}</span><span>{s.label}</span></button>)}</div><div className="home-slide-arrows"><button aria-label="Previous slide" onClick={() => setActive(i => (i + slides.length - 1) % slides.length)}>&#8592;</button><button aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused(p => !p)}>{paused ? 'Play' : 'Pause'}</button><button aria-label="Next slide" onClick={() => setActive(i => (i + 1) % slides.length)}>&#8594;</button></div></Container>
  </section>;
}
