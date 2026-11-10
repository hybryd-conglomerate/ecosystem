import { Link } from 'react-router-dom';
import { tech } from '../data.js';

const pillars = [
  ['01', 'РОБОТОТЕХНИКА', 'Интеллектуальные машины и автономные системы.'],
  ['02', 'ЭЛЕКТРОМОБИЛЬНОСТЬ', 'Новые платформы движения и транспортная инфраструктура.'],
  ['03', 'АЭРОКОСМОС', 'Инженерные решения для воздуха, воды и космоса.'],
  ['04', 'ПРОИЗВОДСТВО', 'Аддитивные технологии и роботизированные процессы.'],
];

export default function Home() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-backdrop" />
        <div className="hero-grid" />
        <div className="hero-content" data-reveal>
          <p className="eyebrow"><span className="status-dot" /> НЕЗАВИСИМЫЙ ТЕХНОЛОГИЧЕСКИЙ КОНГЛОМЕРАТ</p>
          <h1>ИНЖЕНЕРИЯ<br /><em>ДВИЖЕНИЯ.</em></h1>
          <p className="hero-lead">Создаём роботизированные системы, автономную технику и инженерные решения, которые меняют представление о возможном.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/tech">Исследовать разработки <span>↗</span></Link>
            <Link className="text-link" to="/company">О конгломерате <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-meta">
          <span>HYBRID / 001</span><span>ENGINEERING THE FUTURE</span><span>SCROLL TO EXPLORE ↓</span>
        </div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      </section>

      <section className="intro-section section-pad">
        <div className="section-kicker" data-reveal><span>01 / МИССИЯ</span><span>BEYOND THE EXPECTED</span></div>
        <div className="intro-grid">
          <h2 data-reveal>БУДУЩЕЕ<br />НЕ <em>ЖДУТ.</em><br />ЕГО СОЗДАЮТ.</h2>
          <div className="intro-copy" data-reveal>
            <p className="large-copy">Гибрид — инженерная экосистема, объединяющая разработку и производство роботизированной техники на базе электромагнитных двигателей и передовых систем управления.</p>
            <p>Мы соединяем фундаментальную инженерию, промышленный дизайн и смелые технологические концепции в единую архитектуру движения.</p>
            <Link className="arrow-link" to="/company">Узнать о Гибриде <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="product-section section-pad">
        <div className="section-heading" data-reveal>
          <div><div className="section-kicker"><span>02 / ПОРТФЕЛЬ</span><span>HYBRID SYSTEMS</span></div><h2>ТЕХНИКА <em>ГИБРИД</em></h2></div>
          <Link className="arrow-link" to="/tech">Весь каталог <span>↗</span></Link>
        </div>
        <div className="product-grid">
          {tech.slice(0, 4).map((item, index) => (
            <Link to={`/tech/${item.slug}`} className={`product-card product-card-${index + 1}`} key={item.slug} data-reveal>
              <div className="product-card-image"><img src={`/img/${item.image}`} alt={item.name} loading="lazy" /><span className="product-index">0{index + 1}</span><span className="product-arrow">↗</span></div>
              <div className="product-card-info"><div><small>{item.category}</small><h3>{item.name}</h3></div><p>{item.role}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-image" />
        <div className="manifesto-content" data-reveal>
          <span className="section-kicker">03 / ПРИНЦИП</span>
          <h2>НЕ ПРОСТО<br />ТЕХНОЛОГИИ.<br /><em>НОВАЯ ФИЗИКА<br />ПОВСЕДНЕВНОСТИ.</em></h2>
          <p>Каждая разработка начинается с инженерного вопроса. Каждый ответ должен работать в реальном мире.</p>
          <Link className="button button-outline" to="/technologies">Наши технологии <span>↗</span></Link>
        </div>
      </section>

      <section className="pillars-section section-pad">
        <div className="section-kicker" data-reveal><span>04 / КОМПЕТЕНЦИИ</span><span>ONE ENGINEERING CULTURE</span></div>
        <div className="pillars-grid">
          {pillars.map(([n, title, desc]) => <article className="pillar" key={n} data-reveal><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div><b>↗</b></article>)}
        </div>
      </section>

      <section className="closing-cta">
        <div data-reveal><span className="section-kicker">HYBRID / NEXT</span><h2>ДВИЖЕНИЕ<br /><em>НАЧИНАЕТСЯ ЗДЕСЬ.</em></h2><Link className="button button-primary" to="/projects">Открыть проекты <span>↗</span></Link></div>
      </section>
    </>
  );
}
