import './css/global.scss';
import './App.scss';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar/Navbar';
import { useState } from 'react';

export type Link = 'home' | 'projetos' | 'stack' | 'contato';

export const App = () => {
  const [activeLink, setActiveLink] = useState<Link>('home');

  window.addEventListener('hashchange', () => {
    console.log(window.location.href.substring(23));
    setActiveLink(window.location.href.substring(23) as Link);
  });

  return (
    <div>
      <Navbar activeLink={activeLink} />
      <Home />
    </div>
  );
};
