import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { nav } from './data.js';
import Home from './pages/Home.jsx';
import { TechList, TechDetail } from './pages/Tech.jsx';
import { Technologies, Projects, Company, Docs, Cabinet, NotFound } from './pages/Info.jsx';
import Academy from './pages/Academy.jsx';

function Top() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Получаем текущий путь, чтобы менять цвет логотипа
  const { pathname } = useLocation();

  // Определяем цвет свечения в зависимости от раздела
  let glowClass = 'glow-white'; // Белый по умолчанию

  if (pathname.startsWith('/academy')) {
    glowClass = 'glow-purple'; // Фиолетовый для Академии
  } else if (pathname.startsWith('/studio') || pathname.startsWith('/stream')) {
    glowClass = 'glow-red';    // Красный для Студии
  } else if (pathname.startsWith('/aerospace') || pathname.startsWith('/space')) {
    glowClass = 'glow-cyan';   // Бирюзовый для Аэрокосмических линий
  }

  return (
    <>
      <Top />
      <header className="hd">
        {/* Обновленный логотип с анимацией */}
        <Link to="/" className="logo flex items-center gap-3">
          <img 
            src="/img/logo_hybrid.svg" 
            alt="Гибрид — конгломерат" 
            className={`logo-icon ${glowClass}`} 
          />
          {/* Добавил текст, так как на вашем скриншоте он есть */}
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg leading-none tracking-widest text-white uppercase" style={{fontFamily: "'Russo One', sans-serif"}}>Гибрид</span>
            <span className="text-[9px] text-white/50 tracking-[0.3em] uppercase">Конгломерат</span>
          </div>
        </Link>

        <nav>
          {nav.map(([to, t]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {t}
            </NavLink>
          ))}
        </nav>
        
        <Link className="btn" to="/cabinet">Личный кабинет</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<TechList />} />
          <Route path="/tech/:slug" element={<TechDetail />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="ft">
        <img src="/img/logo_hybrid.svg" alt="Гибрид" className="logo-icon" />
        <nav>
          {nav.slice(1).map(([to, t]) => (
            <Link key={to} to={to}>{t}</Link>
          ))}
        </nav>
        <p>© 2025 Конгломерат Гибрид. Все права защищены.</p>
      </footer>
    </>
  );
}
