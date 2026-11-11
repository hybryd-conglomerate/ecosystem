




import { Link } from 'react-router-dom';

const formats = [
  { number: '01', title: 'LIVE BROADCAST', description: 'Прямые трансляции киберспортивных матчей и турниров.' },
  { number: '02', title: 'TOURNAMENT PRODUCTION', description: 'Производство трансляций соревновательных событий.' },
  { number: '03', title: 'ANALYTICS & DESK', description: 'Студийные программы, аналитика и обсуждение матчей.' },
  { number: '04', title: 'VIDEO PRODUCTION', description: 'Хайлайты, игровые обзоры, интервью и видеоматериалы.' }
];

const production = [
  'Многокамерная съёмка',
  'Графика и визуализация игрового процесса',
  'Комментаторская студия',
  'Интервью и аналитические включения',
  'Запись и монтаж трансляций',
  'Архивирование видеоматериалов'
];

export default function Relay() {
  return (
    <div className="relay-page">
      <section className="relay-hero">
        <div className="relay-hero-grid" />
        <div className="relay-hero-content">
          <Link to="/academy" className="relay-back">← HYBRID ESPORTS</Link>
          <span className="section-kicker">HYBRID / BROADCAST & MEDIA</span>
          <h1>HYBRID<br /><em>RELAY.</em></h1>
          <p>Студия производства и трансляции киберспортивных событий. Создаём медиасреду соревнований — от прямого эфира до полноценного видеопроизводства.</p>
          <a href="#formats" className="button button-primary">НАПРАВЛЕНИЯ СТУДИИ ↓</a>
        </div>
        <div className="relay-hero-mark">
          <span>R</span>
          <small>RELAY / 001</small>
        </div>
        <div className="relay-hero-footer">
          <span>HYBRID ESPORTS ECOSYSTEM</span>
          <span>BROADCAST PRODUCTION</span>
        </div>
      </section>

      <section className="section-pad relay-section" id="formats">
        <div className="section-kicker"><span>01 / PRODUCTION FORMATS</span><span>HYBRID RELAY</span></div>
        <div className="relay-format-grid">
          {formats.map(item => (
            <article className="relay-format" key={item.number}>
              <span>{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="relay-studio-section">
        <div className="relay-studio-visual">
          <div className="relay-studio-screen">
            <span>HYBRID RELAY</span>
            <strong>ON AIR</strong>
            <i />
          </div>
        </div>
        <div className="relay-studio-copy">
          <span className="section-kicker">02 / PRODUCTION ENVIRONMENT</span>
          <h2>ОТ ИГРОВОГО<br /><em>МОМЕНТА.</em><br />ДО ЭФИРА.</h2>
          <p>Производственная среда для создания киберспортивного медиаконтента: подготовка эфиров, работа с игровым сигналом, комментирование, графика, запись и постпродакшн.</p>
        </div>
      </section>

      <section className="section-pad relay-section">
        <div className="section-kicker"><span>03 / PRODUCTION CAPABILITIES</span><span>MEDIA INFRASTRUCTURE</span></div>
        <div className="relay-capabilities">
          {production.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad relay-archive">
        <div className="section-kicker"><span>04 / BROADCAST ARCHIVE</span><span>MEDIA LIBRARY</span></div>
        <h2>ИСТОРИЯ<br /><em>ЭФИРОВ.</em></h2>
        <div className="relay-archive-placeholder">
          <span>ARCHIVE / COMING LATER</span>
          <p>Здесь будет размещаться архив трансляций HYBRID RELAY: записи матчей, турнирные эфиры, студийные программы и видеоматериалы.</p>
        </div>
      </section>

      <section className="relay-contact">
        <span className="section-kicker">HYBRID / RELAY</span>
        <h2>THE GAME<br /><em>GOES LIVE.</em></h2>
        <p>Производство киберспортивного контента нового поколения.</p>
        <Link to="/academy" className="button button-outline">ВЕРНУТЬСЯ В HYBRID ESPORTS ↗</Link>
      </section>

      <div className="esport-bottom">
        <Link to="/academy">← HYBRID ESPORTS</Link>
        <span>HYBRID RELAY / BROADCAST STUDIO</span>
      </div>
    </div>
  );
}
