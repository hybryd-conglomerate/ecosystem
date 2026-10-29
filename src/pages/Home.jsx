import {Link} from 'react-router-dom';import {tech} from '../data.js';
export default function Home(){return <>
<section className="hero" style={{backgroundImage:'url(/img/home-hero.jpg)'}}><div><p className="eyebrow">Конгломерат Гибрид</p><h1>Технологии<br/><em>для будущего</em></h1>
<p>Разрабатываем и производим автономную технику, роботов и инфраструктуру нового поколения для логистики, транспорта и промышленности.</p><Link className="btn" to="/tech">Исследовать технику</Link></div>
<ol className="side">{tech.map(t=><li key={t.slug}><Link to={'/tech/'+t.slug}><b>{t.name}</b><span>{t.role}</span></Link></li>)}</ol></section>
<section className="wrap"><div className="row"><h2>Техника Гибрид</h2><Link to="/tech">Весь каталог</Link></div>
<div className="grid5">{tech.map(t=><Link key={t.slug} to={'/tech/'+t.slug} className="card"><img src={`/img/${t.img}.jpg`} alt={t.name}/><h3>{t.name}</h3><p>{t.role}</p></Link>)}</div></section></>}
