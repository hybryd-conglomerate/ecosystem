import {useState} from 'react';import {Link,useParams} from 'react-router-dom';import {tech} from '../data.js';
export function TechList(){return <section className="wrap"><h1>Техника</h1><div className="grid5">{tech.map(t=><Link key={t.slug} to={'/tech/'+t.slug} className="card"><img src={`/img/${t.img}.jpg`} alt={t.name}/><h3>{t.name}</h3><p>{t.role}</p></Link>)}</div></section>}
export function TechDetail(){const {slug}=useParams();const t=tech.find(x=>x.slug===slug);const [g,setG]=useState(0);const [tab,setTab]=useState('Конструкция');
if(!t)return <section className="wrap"><h1>Не найдено</h1></section>;
const main=t.gallery[g]?.[1]||t.hero;const tabs=['Конструкция','Характеристики','Особенности'];
return <><section className="wrap"><p className="crumb"><Link to="/tech">Техника</Link> / {t.name}</p>
<div className="two"><div><p className="eyebrow">{t.name}</p><h1>{t.name.replace('Гибрид ','')}</h1><h2 className="sub">{t.role}</h2><p>{t.lead}</p>
<div className="btns"><button className="btn">3D модель</button><button className="btn ghost">Смотреть видео</button></div></div>
<img className="big" src={`/img/${main}.jpg`} alt={t.name}/></div>
{t.gallery.length>0&&<div className="thumbs">{t.gallery.map(([n,i],k)=><button key={n} className={k===g?'on':''} onClick={()=>setG(k)}><img src={`/img/${i}.jpg`} alt={n}/><span>{n}</span></button>)}</div>}
{t.specs.length>0&&<aside className="specs"><h3>Характеристики</h3>{t.specs.map(([a,b])=><div key={a}><small>{a}</small><b>{b}</b></div>)}</aside>}</section>
{t.build.length>0&&<section className="wrap"><div className="tabs">{tabs.map(x=><button key={x} className={x===tab?'on':''} onClick={()=>setTab(x)}>{x}</button>)}</div>
{tab==='Конструкция'&&<div className="two"><ul className="list">{t.build.map(([a,b])=><li key={a}><b>{a}</b><span>{b}</span></li>)}</ul>{t.extra?<div>{t.extra.map(([n,i])=><figure key={n}><img src={`/img/${i}.jpg`} alt={n}/><figcaption>{n}</figcaption></figure>)}</div>:<div><h3>Цвета</h3><p>{t.colors?.join(', ')}</p><h3>Комплектации</h3><p>{t.trims?.join(', ')}</p></div>}</div>}
{tab==='Характеристики'&&<ul className="list">{t.specs.map(([a,b])=><li key={a}><b>{a}</b><span>{b}</span></li>)}</ul>}
{tab==='Особенности'&&<ul className="list">{t.build.map(([a,b])=><li key={a}><b>{a}</b><span>{b}</span></li>)}</ul>}</section>}</>}
