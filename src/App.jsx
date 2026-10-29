import {Routes,Route,NavLink,Link,useLocation} from 'react-router-dom';import {useEffect} from 'react';import {nav} from './data.js';
import Home from './pages/Home.jsx';import {TechList,TechDetail} from './pages/Tech.jsx';import {Technologies,Projects,Company,Docs,Cabinet,NotFound} from './pages/Info.jsx';import Academy from './pages/Academy.jsx';
function Top(){const {pathname}=useLocation();useEffect(()=>window.scrollTo(0,0),[pathname]);return null}
export default function App(){return <>
<Top/><header className="hd"><Link to="/" className="logo"><img src="/img/logo.jpg" alt="Гибрид — конгломерат"/></Link>
<nav>{nav.map(([to,t])=><NavLink key={to} to={to} end={to==='/'}>{t}</NavLink>)}</nav><Link className="btn" to="/cabinet">Личный кабинет</Link></header>
<main><Routes><Route path="/" element={<Home/>}/><Route path="/tech" element={<TechList/>}/><Route path="/tech/:slug" element={<TechDetail/>}/>
<Route path="/technologies" element={<Technologies/>}/><Route path="/projects" element={<Projects/>}/><Route path="/company" element={<Company/>}/>
<Route path="/academy" element={<Academy/>}/><Route path="/docs" element={<Docs/>}/><Route path="/cabinet" element={<Cabinet/>}/><Route path="*" element={<NotFound/>}/></Routes></main>
<footer className="ft"><img src="/img/logo.jpg" alt="Гибрид"/><nav>{nav.slice(1).map(([to,t])=><Link key={to} to={to}>{t}</Link>)}</nav><p>© 2025 Конгломерат Гибрид. Все права защищены.</p></footer></>}
