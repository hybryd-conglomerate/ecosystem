const disciplines = [
  ['DOTA 2', 'Стратегия / командная игра', 'academy-dota.jpg'],
  ['CS2', 'Тактика / реакция', 'academy-cs2.jpg'],
  ['STARCRAFT II', 'Мышление / скорость решений', 'academy-sc2.jpg'],
  ['VALORANT', 'Стратегия / командная координация', 'academy-valorant.jpg'],
  ['EA SPORTS FC', 'Тактика / командная игра', 'academy-fc.jpg'],
];

const levels = [
  ['HYBRID PRO', '91–100', 'Основной состав'],
  ['HYBRID ELITE', '76–90', 'Продвинутый уровень'],
  ['HYBRID DEVELOPMENT', '56–75', 'Развитие'],
  ['HYBRID FOUNDATION', 'до 55', 'Базовый уровень'],
];

export default function Academy() {
  return (
    <div className="academy-page">
      <section className="academy-hero">
        <div className="academy-backdrop" />
        <div data-reveal><span className="section-kicker">HYBRID / ESPORTS</span><h1>ТАЛАНТЫ.<br /><em>ДИСЦИПЛИНА.</em><br />ПОБЕДЫ.</h1><p>Академия развития киберспортивных талантов. Система отбора, обучения и подготовки профессиональных игроков.</p><a className="button button-primary" href="#disciplines">Исследовать академию ↓</a></div>
      </section>
      <section id="disciplines" className="section-pad"><div className="section-kicker"><span>01 / DISCIPLINES</span><span>COMPETITIVE ECOSYSTEM</span></div><div className="discipline-grid">{disciplines.map(([name, desc, image], i) => <article className="discipline-card" data-reveal key={name}><img src={`/img/${image}`} alt="" loading="lazy" /><span>0{i + 1}</span><h2>{name}</h2><p>{desc}</p></article>)}</div></section>
      <section className="academy-program section-pad"><div data-reveal><span className="section-kicker">02 / DEVELOPMENT</span><h2>HYBRID<br /><em>SCOUT CAMP.</em></h2><p>Комплексная программа оценки потенциала, командного взаимодействия и готовности к профессиональному развитию.</p></div><div className="program-steps" data-reveal><div><span>DAY 01</span><h3>ОТБОР</h3><p>Регистрация, интервью, индивидуальные тесты и командные испытания.</p></div><div><span>DAY 02</span><h3>ОЦЕНКА</h3><p>Разбор результатов, дополнительные испытания и итоговая оценка.</p></div></div></section>
      <section className="section-pad"><div className="section-kicker"><span>03 / PLAYER LEVELS</span><span>PERFORMANCE SYSTEM</span></div><div className="level-list">{levels.map(([name, score, desc]) => <div className="level-row" key={name}><span>{name}</span><b>{score}</b><p>{desc}</p><i>↗</i></div>)}</div></section>
      <section className="academy-join section-pad" id="join"><span className="section-kicker">HYBRID / JOIN THE TEAM</span><h2>ТВОЙ СЛЕДУЮЩИЙ<br /><em>УРОВЕНЬ.</em></h2><p>Развивай потенциал в профессиональной среде.</p><a className="button button-primary" href="mailto:academy@hybrid.example">Связаться с академией ↗</a></section>
    </div>
  );
}
