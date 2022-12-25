import { Link } from '../../App';
import './Navbar.scss';

type NavbarItemProps = {
  text: string;
  color: 'purple' | 'orange';
  shine?: boolean;
  activeLink: Link;
  href: Link;
  onClick: () => void;
};

export const NavbarItem = ({
  text,
  color,
  shine,
  href,
  activeLink,
}: NavbarItemProps) => {
  const isActive = activeLink === href;

  return (
    <div className='container'>
      <li
        className={`item item-${color} ${shine ? 'shine' : ''} ${
          isActive ? 'active' : ''
        }`}
      >
        <a href={`#${href}`} className='link'>
          <span className={`vertical-bar vertical-bar-${color}`}></span>
          {text}
          {shine ? <div className='light' /> : null}
        </a>
      </li>
    </div>
  );
};
