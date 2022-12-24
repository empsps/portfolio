import './Navbar.scss';
import { NavbarItem } from './NavbarItem';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='title'>JUAN BARROS</span>
      <div className='items'>
        <NavbarItem text='Links' color='purple' />
        <NavbarItem text='Meus projetos' color='purple' />
        <NavbarItem text='Minha stack' color='purple' />
        <NavbarItem shine={true} text='Contato' color='orange' />
      </div>
    </div>
  );
};
