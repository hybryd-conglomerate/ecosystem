







import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { nav } from './data.js';
import Home from './pages/Home.jsx';
import { TechList, TechDetail } from './pages/Tech.jsx';
import { Technologies, Projects, Company, Docs, Cabinet, NotFound } from './pages/Info.jsx';
import Academy from './pages/Academy.jsx';
import Aerospace from './pages/Aerospace.jsx';
import Triathlon from './pages/Triathlon.jsx'; // <--- ДОБАВЛЕН ИМПОРТ

function MotionSystem() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const nodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Определяем цвет свечения логотипа
  let glowClass = 'glow-white'; 

  if (path.startsWith('/academy')) {
    glowClass = 'glow-purple'; 
  } else if (path.startsWith('/studio') || path.startsWith('/stream')) {
    glowClass = 'glow-red';    
  } else if (path.startsWith('/aerospace') || path.startsWith('/space')) {
    glowClass = 'glow-cyan';   
  } else if (path.startsWith('/triathlon')) {
    glowClass = 'glow-red';    // <--- ДОБАВЛЕНО УСЛОВИЕ ДЛЯ ТРИАТЛОНА
  }

  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Гибрид — главная">
        <img src="/img/logo_hybrid.svg" alt="" className={`logo-icon ${glowClass}`} />
        <span className="brand-copy">
          <strong>ГИБРИД</strong>
          <small>КОНГЛОМЕРАТ</small>
        </span>
      </Link>

      <button
        className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
        aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>

      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
        {nav.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'}>
            {label}
          </NavLink>
        ))}
      </nav>

      <Link className="header-action" to="/cabinet">
        <span>Личный кабинет</span><i>↗</i>
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link to="/" className="brand">
          <img src="/img/logo_hybrid.svg" alt="" className="logo-icon" />
          <span className="brand-copy"><strong>ГИБРИД</strong><small>КОНГЛОМЕРАТ</small></span>
        </Link>
        <p>Инженерия движения.<br />Технологии нового поколения.</p>
        <div className="footer-links">
          {nav.slice(1).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} КОНГЛОМЕРАТ ГИБРИД</span>
        <span>СОЗДАЁМ ТО, ЧЕГО ЕЩЁ НЕ СУЩЕСТВУЕТ</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <MotionSystem />
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<TechList />} />
          <Route path="/tech/:slug" element={<TechDetail />} />
          <Route path="/technologies" element={<Technologies />} />
          
          {/* Аэрокосмические линии */}
          <Route path="/aerospace" element={<Aerospace />} />
          
          {/* Триатлон */}
          <Route path="/triathlon" element={<Triathlon />} /> {/* <--- ДОБАВЛЕН МАРШРУТ */}
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
