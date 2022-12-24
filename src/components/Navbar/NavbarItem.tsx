import './Navbar.scss';

type NavbarItemProps = {
  text: string;
  color: 'purple' | 'orange';
  shine?: boolean;
};

export const NavbarItem = ({ text, color, shine }: NavbarItemProps) => {
  return (
    <div className='item-container'>
      <button className={`item item-${color} ${shine ? 'shine' : ''}`}>
        {text}
        {shine ? <div className='light' /> : null}
      </button>
    </div>
  );
};
