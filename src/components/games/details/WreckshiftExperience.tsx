import { useState } from 'react';
import Container from '../../common/Container';
import './Wreckshift.css';

const W = '/assets/games/wreckshift/web/';

const arenas = [
  { id: 'breakyard', name: 'The Breakyard', mood: 'Sunset scrapyard', color: '#ffb340',
    copy: 'A maze of stacked wrecks, ramps and container lanes. Lure the chase under the crusher and let the jaws do the rest.',
    hazards: ['Car crusher', 'Ramp yard', 'Container alleys'] },
  { id: 'neon-docks', name: 'Neon Docks', mood: 'Rain-soaked harbour at night', color: '#ff4fd1',
    copy: 'Wet neon quays, a gantry crane that drops containers on whoever sits under it, and black water waiting past the edge.',
    hazards: ['Container crane drop', 'Harbour edge', 'Warehouse lanes'] },
  { id: 'frozen-quarry', name: 'Frozen Quarry', mood: 'Snow and ice in the mountains', color: '#8bdfcb',
    copy: 'Frozen lakes where grip disappears, haul trucks that do not stop, and an excavator working the pit while you run.',
    hazards: ['Ice lakes', 'Haul trucks', 'Quarry machines'] },
];

const modes = [
  ['01', 'Endless Chase', 'Survive. Score. Climb the Wanted level.', 'Every wreck raises the heat until the whole force is on you. Build Wreck Chains for huge scores and chase your best on the leaderboard.'],
  ['02', 'Showdown', 'Last car running wins.', 'Duel one rival or fight three in a free-for-all, with police on everyone and supply drops of NITRO, shields, repairs and oil slicks.'],
  ['03', 'Missions', '48 jobs. Three chapters. Boss chases.', 'Get the scrap out, survive the blockade, take down the boss car. Earn up to three stars a mission and unlock the next arena.'],
  ['04', 'Multiplayer', 'Up to four friends on the same Wi-Fi.', 'Host a Showdown and race your friends in the same yard, the police chasing all of you at once.'],
];

export default function WreckshiftExperience() {
  const [selected, setSelected] = useState(0);
  const arena = arenas[selected];
  return (
    <>
      <section className="ws-arenas" id="ws-arenas">
        <Container>
          <div className="ws-section-heading">
            <p className="ws-eyebrow">THREE ARENAS</p>
            <h2>Every yard fights back.<br /><span>Use it before the police do.</span></h2>
          </div>
          <div className="ws-arena-stage" style={{ '--arena': arena.color } as React.CSSProperties}>
            <div className="ws-arena-art"><img key={arena.id} src={W + arena.id + '.webp'} alt={arena.name + ' key art: the hero car pursued by police'} width="1672" height="941" loading="lazy" /></div>
            <div className="ws-arena-copy">
              <p className="ws-eyebrow">{arena.mood}</p>
              <h3>{arena.name}</h3>
              <p>{arena.copy}</p>
              <ul className="ws-hazards">{arena.hazards.map((h) => <li key={h}>{h}</li>)}</ul>
            </div>
          </div>
          <div className="ws-arena-tabs" role="group" aria-label="Choose an arena">
            {arenas.map((a, i) => (
              <button key={a.id} aria-pressed={selected === i} onClick={() => setSelected(i)} style={{ '--arena': a.color } as React.CSSProperties}>
                <img src={W + a.id + '.webp'} alt="" width="160" height="90" loading="lazy" />
                <span>{a.name}</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="ws-modes">
        <Container>
          <div className="ws-section-heading">
            <p className="ws-eyebrow">FOUR WAYS TO PLAY</p>
            <h2>One more run.<br /><span>One more wreck.</span></h2>
          </div>
          <div className="ws-mode-grid">
            {modes.map(([n, title, tag, copy]) => (
              <article className="ws-mode" key={n}>
                <span className="ws-mode-number">{n}</span>
                <h3>{title}</h3>
                <h4>{tag}</h4>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="ws-boards">
        <Container>
          <div className="ws-boards-grid">
            <div className="ws-section-heading">
              <p className="ws-eyebrow">LEADERBOARDS</p>
              <h2>Your best run.<br /><span>On the board for everyone.</span></h2>
              <p>Sign in with Google Play Games and every Endless run and Showdown match puts your score on the board: all time, this week and today, around the world or just between friends.</p>
            </div>
            <div className="ws-board-card" aria-label="Example leaderboard">
              <div className="ws-board-head"><span>&#9733; LEADERBOARDS</span><em>ALL TIME</em></div>
              <ol>
                <li><b>1</b><span>YOU</span><strong>124,700</strong></li>
                <li><b>2</b><span>KAISER</span><strong>98,350</strong></li>
                <li><b>3</b><span>DUCHESS</span><strong>91,020</strong></li>
                <li><b>4</b><span>RUST</span><strong>87,410</strong></li>
              </ol>
              <p className="ws-board-note">Example board</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="ws-garage">
        <Container>
          <div className="ws-garage-grid">
            <div className="ws-section-heading">
              <p className="ws-eyebrow">THE GARAGE</p>
              <h2>Ten cars.<br /><span>Each with its own way to win.</span></h2>
              <p>From the nimble buggy to the armoured bruiser: earn Scrap from every run, buy or rent the next car, and pick its paint. Speed, grip, weight and armour all change how you handle the chase.</p>
            </div>
            <div className="ws-soundtrack">
              <p className="ws-eyebrow">ORIGINAL SOUNDTRACK</p>
              <p>Seven driving tracks made for the chase, mixed live under the sirens and the police radio.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
