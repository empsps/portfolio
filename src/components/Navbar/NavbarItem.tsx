import './Navbar.scss';

type NavbarItemProps = {
  text: string;
  color: 'purple' | 'orange';
  shine?: boolean;
};

export const NavbarItem = ({ text, color, shine }: NavbarItemProps) => {
  return (
    <div className='item-container'>
      <button className={`item item-${color}`}>
        {text}
        <div className='light' />
      </button>
    </div>
  );
};
