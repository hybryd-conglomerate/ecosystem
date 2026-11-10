import { Link } from 'react-router-dom';

const aerospaceProjects = [
  {
    title: 'Гибрид Мантикора',
    desc: 'Высокоскоростной автономный перехватчик нового поколения. Создан для обеспечения безопасности и мониторинга периметра в экстремальных условиях.',
    category: 'AEROSPACE / DEFENSE',
    image: 'manticora.png',
    link: '/tech/manticore'
  },
  {
    title: 'Электроджеты',
    desc: 'Исследования и разработка электрических летательных платформ. Экологичный воздушный транспорт будущего.',
    category: 'AEROSPACE / E-MOBILITY',
    image: 'home-hero.jpg', // Если есть отдельная картинка, поменяйте путь
    link: '/projects'
  },
  {
    title: 'Орбитальные системы',
    desc: 'Разработка сенсоров и систем связи для работы в условиях открытого космоса и верхних слоев атмосферы.',
    category: 'AEROSPACE / SPACE',
    image: 'atom-Si.png', // Временная картинка, замените на космическую
    link: '/tech'
  }
];

export default function Aerospace() {
  return (
    <div className="aerospace-page">
      {/* Хиро-секция */}
      <section className="hero hero-home" style={{ backgroundImage: "url('/img/home-hero.jpg')" }}>
        <div className="hero-backdrop" />
        <div className="hero-grid" />
        <div className="hero-content" data-reveal>
          <p className="eyebrow"><span className="status-dot" style={{ background: '#00FFFF', boxShadow: '0 0 16px #00FFFF' }} /> НАПРАВЛЕНИЕ / AEROSPACE</p>
          <h1>АЭРОКОСМИЧЕСКИЕ<br /><em style={{ color: '#00FFFF' }}>ЛИНИИ.</em></h1>
          <p className="hero-lead">
            Инженерные решения для воздуха, воды и космоса. Мы проектируем автономные летательные аппараты и системы мониторинга нового поколения.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects" style={{ background: '#00FFFF', borderColor: '#00FFFF', color: '#08090d' }}>
              Исследовать проекты <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Сетка проектов */}
      <section id="projects" className="section-pad">
        <div className="page-heading" data-reveal>
          <span className="section-kicker" style={{ borderColor: 'rgba(0, 255, 255, 0.2)' }}>01 / ПРОЕКТЫ НАПРАВЛЕНИЯ</span>
          <h1>ТЕХНОЛОГИИ <em style={{ color: '#00FFFF' }}>ВЫСОТЫ.</em></h1>
          <p>Разработки, которые стирают границы между атмосферой и космосом.</p>
        </div>

        <div className="catalog-grid">
          {aerospaceProjects.map((item, index) => (
            <Link to={item.link} className="catalog-card" key={item.title} data-reveal>
              <div className="catalog-image" style={{ background: 'radial-gradient(ellipse, #1a2a30, #0d0f15 70%)' }}>
                <img src={`/img/${item.image}`} alt={item.title} loading="lazy" />
                <span style={{ color: '#00FFFF' }}>0{index + 1}</span>
                <b style={{ color: '#00FFFF' }}>↗</b>
              </div>
              <div className="catalog-info">
                <small style={{ color: '#00FFFF' }}>{item.category}</small>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
