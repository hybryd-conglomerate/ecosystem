





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

      {/* --- ГАЛЕРЕЯ СТУДИИ (ИСПОЛЬЗУЕМ ВАШИ КАРТИНКИ) --- */}
      <section className="relay-studio-section">
        <div className="relay-studio-copy">
          <span className="section-kicker">02 / PRODUCTION ENVIRONMENT</span>
          <h2>ОТ ИГРОВОГО<br /><em>МОМЕНТА.</em><br />ДО ЭФИРА.</h2>
          <p>Производственная среда для создания киберспортивного медиаконтента: подготовка эфиров, работа с игровым сигналом, комментирование, графика, запись и постпродакшн.</p>
          
          <ul className="relay-capabilities" style={{ marginTop: '30px' }}>
            <div>
              <span>01</span>
              <strong>Комментаторские кабины с шумоизоляцией</strong>
              <i>↗</i>
            </div>
            <div>
              <span>02</span>
              <strong>Игровые станции с захватом сигнала 4K</strong>
              <i>↗</i>
            </div>
            <div>
              <span>03</span>
              <strong>Зона отдыха и лаунж для команд</strong>
              <i>↗</i>
            </div>
          </ul>
        </div>

        <div className="relay-gallery-grid">
          {/* Главное фото (ряд ПК) */}
          <div className="relay-gallery-item relay-gallery-main">
            <img src="/img/uslug_PC.png" alt="Broadcast PC Row" loading="lazy" />
            <div className="relay-gallery-overlay"><span>MAIN BROADCAST ARENA</span></div>
          </div>
          
          {/* Рабочее место (робот-манипулятор) */}
          <div className="relay-gallery-item">
            <img src="/img/uslug_live.png" alt="Workstation" loading="lazy" />
            <div className="relay-gallery-overlay"><span>CONTROL ROOM</span></div>
          </div>
          
          {/* Сетап (кресло и монитор) */}
          <div className="relay-gallery-item">
            <img src="/img/uslug_boot.png" alt="Gaming Setup" loading="lazy" />
            <div className="relay-gallery-overlay"><span>PLAYER STATION</span></div>
          </div>
          
          {/* Кафе (зона отдыха) */}
          <div className="relay-gallery-item">
            <img src="/img/uslug_otdih.png" alt="Lounge Zone" loading="lazy" />
            <div className="relay-gallery-overlay"><span>RELAX ZONE</span></div>
          </div>
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

      {/* --- СЕКЦИЯ МЕРЧА --- */}
      <section className="section-pad relay-section" style={{ background: '#0b0c12' }}>
        <div className="section-kicker">
          <span>04 / TEAM MERCH</span>
          <span>HYBRID RELAY / GEAR</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginTop: '40px' }}>
          
          <div data-reveal style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/img/merch-tshirt-purple.png" 
              alt="Hybrid Relay Jersey" 
              style={{ 
                width: '100%', 
                maxWidth: '500px', 
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 40px rgba(167, 139, 250, 0.3))' 
              }} 
            />
          </div>

          <div data-reveal>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', marginBottom: '20px' }}>
              ОФИЦИАЛЬНЫЙ <em style={{ color: '#a78bfa' }}>МЕРЧ.</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.8', marginBottom: '25px' }}>
              Экипировка команды HYBRID RELAY. Дизайн разработан специально для киберспортивных трансляций и турниров Академии. 
              Отражает агрессивный стиль и технологичность конгломерата.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#d1d5db' }}>
                <span style={{ color: '#a78bfa', fontSize: '18px', fontWeight: 'bold' }}>✓</span> Дышащая ткань премиум-класса
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#d1d5db' }}>
                <span style={{ color: '#a78bfa', fontSize: '18px', fontWeight: 'bold' }}>✓</span> Светоотражающие элементы
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#d1d5db' }}>
                <span style={{ color: '#a78bfa', fontSize: '18px', fontWeight: 'bold' }}>✓</span> Ограниченная серия для участников
              </li>
            </ul>

            <button 
              className="button button-primary" 
              style={{ background: '#a78bfa', borderColor: '#a78bfa', color: '#08090d' }}
            >
              Заказать экипировку ↗
            </button>
          </div>
        </div>
      </section>

      <section className="section-pad relay-archive">
        <div className="section-kicker"><span>05 / BROADCAST ARCHIVE</span><span>MEDIA LIBRARY</span></div>
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
