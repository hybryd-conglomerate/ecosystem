











import { Link } from 'react-router-dom';

const disciplines = [
  { slug: 'dota-2', name: 'DOTA 2', desc: 'Стратегия / командная игра', image: 'academy-dota.jpg' },
  { slug: 'cs2', name: 'CS2', desc: 'Тактика / реакция', image: 'academy-cs2.jpg' },
  { slug: 'starcraft-ii', name: 'STARCRAFT II', desc: 'Мышление / скорость решений', image: 'academy-sc2.jpg' },
  { slug: 'valorant', name: 'VALORANT', desc: 'Стратегия / командная координация', image: 'academy-valorant.jpg' },
  { slug: 'ea-sports-fc', name: 'EA SPORTS FC', desc: 'Тактика / командная игра', image: 'academy-fc.jpg' }
];

const levels = [
  ['HYBRID PRO', '91–100', 'Основной состав'],
  ['HYBRID ELITE', '76–90', 'Продвинутый уровень'],
  ['HYBRID DEVELOPMENT', '56–75', 'Развитие'],
  ['HYBRID FOUNDATION', 'до 55', 'Базовый уровень']
];

export default function Academy() {
  return (
    <div className="academy-page">
      <section className="academy-hero">
        <div className="academy-backdrop" />
        <div data-reveal>
          <span className="section-kicker">HYBRID / ESPORTS</span>
          <h1>ТАЛАНТЫ.<br /><em>ДИСЦИПЛИНА.</em><br />ПОБЕДЫ.</h1>
          <p>Академия развития киберспортивных талантов. Система отбора, обучения и подготовки профессиональных игроков.</p>
          <a className="button button-primary" href="#disciplines">Исследовать академию ↓</a>
        </div>
      </section>

      <section id="disciplines" className="section-pad">
        <div className="section-kicker"><span>01 / DISCIPLINES</span><span>COMPETITIVE ECOSYSTEM</span></div>
        <div className="discipline-grid">
          {disciplines.map((item, index) => (
            <Link to={`/academy/${item.slug}`} className="discipline-card" data-reveal key={item.slug}>
              <img src={`/img/${item.image}`} alt="" loading="lazy" />
              <span>0{index + 1}</span>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
              <i className="discipline-arrow">↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="academy-program section-pad">
        <div data-reveal>
          <span className="section-kicker">02 / DEVELOPMENT</span>
          <h2>HYBRID<br /><em>SCOUT CAMP.</em></h2>
          <p>Комплексная программа оценки потенциала, командного взаимодействия и готовности к профессиональному развитию.</p>
        </div>
        <div className="program-steps" data-reveal>
          <div><span>DAY 01</span><h3>ОТБОР</h3><p>Регистрация, интервью, индивидуальные тесты и командные испытания.</p></div>
          <div><span>DAY 02</span><h3>ОЦЕНКА</h3><p>Разбор результатов, дополнительные испытания и итоговая оценка.</p></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-kicker"><span>03 / PLAYER LEVELS</span><span>PERFORMANCE SYSTEM</span></div>
        <div className="level-list">
          {levels.map(([name, score, desc]) => (
            <div className="level-row" key={name}>
              <span>{name}</span><b>{score}</b><p>{desc}</p><i>↗</i>
            </div>
          ))}
        </div>
      </section>

      {/* --- СЕКЦИЯ МЕРЧА АКАДЕМИИ --- */}
      <section className="section-pad" style={{ background: '#0b0c12' }}>
        <div className="section-kicker">
          <span>04 / TEAM MERCH</span>
          <span>HYBRID ACADEMY / UNIFORM</span>
        </div>

        <div style={{ marginTop: '40px' }}>
          
          {/* Блок с двумя картинками */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            
            {/* Куртка */}
            <div data-reveal style={{ display: 'flex', justifyContent: 'center', background: '#08090d', padding: '20px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img 
                src="/img/merch-coat.png" 
                alt="Hybrid Academy Tech Coat" 
                style={{ 
                  width: '100%', 
                  maxWidth: '500px', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 30px rgba(167, 139, 250, 0.2))' 
                }} 
              />
            </div>

            {/* Футболка */}
            <div data-reveal style={{ display: 'flex', justifyContent: 'center', background: '#08090d', padding: '20px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img 
                src="/img/merch-tshirt-purple.png" 
                alt="Hybrid Academy T-Shirt" 
                style={{ 
                  width: '100%', 
                  maxWidth: '500px', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 30px rgba(167, 139, 250, 0.2))' 
                }} 
              />
            </div>

          </div>

          {/* Текст и кнопка снизу на всю ширину */}
          <div data-reveal style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', marginBottom: '20px' }}>
              ЭКИПИРОВКА <em style={{ color: 'var(--violet)' }}>АКАДЕМИИ.</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.8', marginBottom: '30px' }}>
              Официальная форма HYBRID ACADEMY. Техническая куртка-плащ для защиты от непогоды и фиолетовая киберспортивная футболка с принтом. 
              Разработаны с учетом требований к тренировкам и соревнованиям.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '13px' }}>
                <span style={{ color: 'var(--violet)', fontSize: '16px', fontWeight: 'bold' }}>✓</span> Водоотталкивающая ткань
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '13px' }}>
                <span style={{ color: 'var(--violet)', fontSize: '16px', fontWeight: 'bold' }}>✓</span> Светоотражающие элементы
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '13px' }}>
                <span style={{ color: 'var(--violet)', fontSize: '16px', fontWeight: 'bold' }}>✓</span> Дышащий материал
              </li>
            </ul>

            <button 
              className="button button-primary" 
              style={{ background: 'var(--violet)', borderColor: 'var(--violet)', color: '#08090d' }}
            >
              Заказать экипировку ↗
            </button>
          </div>

          {/* БЛОК: ЛУКБУК */}
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="section-kicker" style={{ width: '100%', marginBottom: '20px' }}>
              <span>OFFICIAL LOOKBOOK</span>
              <span>SEASON 2026</span>
            </div>
            <img 
              src="/img/merch-lookbook.png" 
              alt="Hybrid Academy Lookbook" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
              }} 
            />
          </div>

        </div>
      </section>
      {/* --- КОНЕЦ СЕКЦИИ МЕРЧА --- */}

      <section className="academy-join section-pad" id="join">
        <span className="section-kicker">HYBRID / JOIN THE TEAM</span>
        <h2>ТВОЙ СЛЕДУЮЩИЙ<br /><em>УРОВЕНЬ.</em></h2>
        <p>Развивай потенциал в профессиональной среде.</p>
        <a className="button button-primary" href="mailto:academy@hybrid.example">Связаться с академией ↗</a>
      </section>
    </div>
  );
}
