import './Navbar.scss';
import { useState } from 'react';
import { NavbarItem } from './NavbarItem';
import { Link } from '../../App';

type NavbarProps = {
  activeLink: Link;
};

export const Navbar = ({ activeLink }: NavbarProps) => {
  const [activeClass, setActiveClass] = useState(false);

  const toggleHamburger = () => {
    setActiveClass(!activeClass);
  };

  return (
    <nav className='navbar'>
      <label className='title'>JUAN BARROS</label>
      <ul className={`items ${activeClass ? 'active' : ''}`}>
        <NavbarItem
          href='home'
          activeLink={activeLink}
          onClick={toggleHamburger}
          text='Home'
          color='purple'
        />
        <NavbarItem
          href='projetos'
          activeLink={activeLink}
          onClick={toggleHamburger}
          text='Meus projetos'
          color='purple'
        />
        <NavbarItem
          href='stack'
          activeLink={activeLink}
          onClick={toggleHamburger}
          text='Minha stack'
          color='purple'
        />
        <NavbarItem
          href='contato'
          activeLink={activeLink}
          onClick={toggleHamburger}
          shine={true}
          text='Contato'
          color='orange'
        />
      </ul>
      <div
        onClick={toggleHamburger}
        className={`hamburger ${activeClass ? 'active' : ''}`}
      >
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  );
};
