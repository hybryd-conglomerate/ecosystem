





import { Link } from 'react-router-dom';

const stages = [
  {
    num: '01',
    title: 'ПЛАВАНИЕ / SWIM',
    desc: 'Подготовка в бассейне. Отработка техники дыхания, гребка и выносливости для уверенного прохождения открытой воды.',
    icon: '🌊'
  },
  {
    num: '02',
    title: 'ВЕЛОСИПЕД / BIKE',
    desc: 'Тренировки на профессиональных велотренажерах. Работа над каденсом, силой ног и аэродинамичной посадкой.',
    icon: '🚴'
  },
  {
    num: '03',
    title: 'БЕГ / RUN',
    desc: 'Беговые дорожки для отработки ритма и темпа. Финальный этап, требующий максимальной физической отдачи и ментальной стойкости.',
    icon: '🏃'
  }
];

export default function Triathlon() {
  return (
    <div className="triathlon-page">
      {/* Хиро-секция */}
      <section className="hero hero-home" style={{ backgroundImage: "url('/img/home-hero.jpg')" }}>
        <div className="hero-backdrop" />
        <div className="hero-grid" />
        <div className="hero-content" data-reveal>
          <p className="eyebrow">
            <span className="status-dot" style={{ background: '#FF2A2A', boxShadow: '0 0 16px #FF2A2A' }} /> 
            НАПРАВЛЕНИЕ / ЖЕНСКАЯ КОМАНДА
          </p>
          <h1>ГИБРИД<br /><em style={{ color: '#FF2A2A' }}>ТРИАТЛОН.</em></h1>
          <p className="hero-lead">
            Женская команда по триатлону. Слияние физической выносливости, дисциплины и технологичного подхода к тренировкам. Три этапа, где решают сила духа, тактика и командная поддержка.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#stages" style={{ background: '#FF2A2A', borderColor: '#FF2A2A', color: '#08090d' }}>
              Исследовать этапы <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Этапы */}
      <section id="stages" className="section-pad">
        <div className="page-heading" data-reveal>
          <span className="section-kicker" style={{ borderColor: 'rgba(255, 42, 42, 0.2)' }}>01 / ДИСЦИПЛИНЫ</span>
          <h1>ТРИ ЭТАПА <em style={{ color: '#FF2A2A' }}>ПОДГОТОВКИ.</em></h1>
          <p>Каждый этап требует переключения между физической нагрузкой, восстановлением и командной работой.</p>
        </div>

        <div className="catalog-grid">
          {stages.map((stage) => (
            <div className="catalog-card" key={stage.num} data-reveal>
              <div className="catalog-image" style={{ background: 'radial-gradient(ellipse, #2a1a1a, #0d0f15 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '80px', filter: 'drop-shadow(0 0 20px rgba(255,42,42,0.5))' }}>{stage.icon}</span>
                <span style={{ color: '#FF2A2A', position: 'absolute', top: '18px', left: '18px', fontSize: '10px', fontWeight: 'bold' }}>{stage.num}</span>
              </div>
              <div className="catalog-info">
                <small style={{ color: '#FF2A2A' }}>STAGE {stage.num}</small>
                <h2>{stage.title}</h2>
                <p>{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="closing-cta">
        <div data-reveal>
          <span className="section-kicker">HYBRID / WOMEN'S TEAM</span>
          <h2>СТАНЬ ЧАСТЬЮ <em style={{ color: '#FF2A2A' }}>КОМАНДЫ.</em></h2>
          <p style={{ color: 'var(--muted)', marginBottom: '30px', maxWidth: '500px' }}>
            Запишитесь на пробную тренировку в нашем кибер-отеле. Инструкторы помогут составить индивидуальный план подготовки и проведут инструктаж по работе с оборудованием.
          </p>
          <a 
            href="https://www.xn----8sbbqapnmkqvgnh6m.xn--p1ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button button-primary" 
            style={{ background: '#FF2A2A', borderColor: '#FF2A2A', color: '#08090d' }}
          >
            Перейти в киберотель <span>↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
