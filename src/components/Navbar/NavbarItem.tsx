import './Navbar.scss';

type NavbarItemProps = {
  text: string;
  color: 'purple' | 'orange';
};

export const NavbarItem = ({ text, color }: NavbarItemProps) => {
  return (
    <button className={`item item-${color}`}>
      {text}
    </button>
  )
}