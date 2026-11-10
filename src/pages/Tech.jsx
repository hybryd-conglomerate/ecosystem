import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { tech } from '../data.js';

export function TechList() {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', ...new Set(tech.map((item) => item.category))];
  const visible = filter === 'ALL' ? tech : tech.filter((item) => item.category === filter);

  return (
    <section className="catalog-page section-pad">
      <div className="page-heading" data-reveal><span className="section-kicker">HYBRID / PRODUCT PORTFOLIO</span><h1>ИНЖЕНЕРИЯ<br /><em>В ДВИЖЕНИИ.</em></h1><p>Каталог роботизированных систем, автономной техники и инженерных разработок конгломерата.</p></div>
      <div className="filter-bar" data-reveal>
        {categories.map((category) => <button key={category} className={filter === category ? 'filter-active' : ''} onClick={() => setFilter(category)}>{category === 'ALL' ? 'ВСЕ РАЗРАБОТКИ' : category}</button>)}
      </div>
      <div className="catalog-grid">
        {visible.map((item, index) => <Link to={`/tech/${item.slug}`} className="catalog-card" key={item.slug} data-reveal>
          <div className="catalog-image"><img src={`/img/${item.image}`} alt={item.name} loading="lazy" /><span>0{index + 1}</span><b>↗</b></div>
          <div className="catalog-info"><small>{item.category}</small><h2>{item.name}</h2><p>{item.role}</p><span className="status-label">{item.status}</span></div>
        </Link>)}
      </div>
    </section>
  );
}

export function TechDetail() {
  const { slug } = useParams();
  const item = tech.find((x) => x.slug === slug);
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  if (!item) return <section className="section-pad"><h1>РАЗРАБОТКА НЕ НАЙДЕНА</h1><Link className="arrow-link" to="/tech">Вернуться в каталог ↗</Link></section>;

  const gallery = item.gallery?.length ? item.gallery : [[item.name, item.hero]];
  const image = gallery[active]?.[1] || item.hero;

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: -y * 7, y: x * 10 });
  }

  return (
    <article className="product-detail">
      <div className="detail-topline"><Link to="/tech">← ВСЕ РАЗРАБОТКИ</Link><span>HYBRID / {item.category}</span></div>
      <section className="detail-hero section-pad">
        <div className="detail-copy" data-reveal><span className="section-kicker">{item.category}</span><h1>{item.short}<br /><em>HYBRID.</em></h1><p className="detail-role">{item.role}</p><p>{item.lead}</p><span className="status-label">{item.status}</span><div className="detail-actions"><a href="#overview" className="button button-primary">Обзор разработки <span>↓</span></a><Link to="/docs" className="text-link">Документация ↗</Link></div></div>
        <div className="detail-visual" onMouseMove={handleMove} onMouseLeave={() => setRotation({ x: 0, y: 0 })} data-reveal>
          <div className="visual-grid" /><img src={`/img/${image}`} alt={item.name} style={{ transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }} /><span className="visual-caption">INTERACTIVE VISUAL / {String(active + 1).padStart(2, '0')}</span>
        </div>
      </section>
      {gallery.length > 1 && <div className="gallery-strip section-pad">{gallery.map(([label, src], index) => <button className={active === index ? 'gallery-active' : ''} onClick={() => setActive(index)} key={src}><img src={`/img/${src}`} alt="" /><span>{String(index + 1).padStart(2, '0')} / {label}</span></button>)}</div>}
      <section id="overview" className="detail-overview section-pad">
        <div><span className="section-kicker">01 / OVERVIEW</span><h2>АРХИТЕКТУРА<br /><em>РАЗРАБОТКИ.</em></h2></div>
        <div className="overview-copy"><p>{item.lead}</p><p className="technical-note">{item.note}</p></div>
      </section>
      {item.build?.length > 0 && <section className="detail-specs section-pad"><div className="section-kicker"><span>02 / ENGINEERING</span><span>КЛЮЧЕВЫЕ СИСТЕМЫ</span></div><div className="spec-list">{item.build.map(([name, description], index) => <div className="spec-row" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p><b>↗</b></div>)}</div></section>}
      <section className="detail-next section-pad"><span className="section-kicker">CONTINUE EXPLORING</span><h2>БОЛЬШЕ<br /><em>РАЗРАБОТОК.</em></h2><Link className="button button-outline" to="/tech">Вернуться в каталог ↗</Link></section>
    </article>
  );
}
